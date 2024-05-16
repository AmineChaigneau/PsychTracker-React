// File: src/experimental/MTcalibration/MTcalibration.js
import React, { useState, useEffect } from 'react';
import style from './MTcalibration.module.css';
import { useMouseTracker, useDeadlines } from '../../hooks';
import { Dialog, Button, ButtonMT, Typography } from '../../components';
import TrajectoryCanvas from './TrajectoryCanvas';

/**
 * MTcalibration component to conduct calibration trials.
 * @param {Object} props
 * @param {number} props.initialTrialCount - Number of calibration trials.
 * @param {string} props.initialSide - Starting side (either 'left' or 'right').
 */
function MTcalibration({ initialTrialCount, initialSide }) {
    const [trialCount, setTrialCount] = useState(0);
    const [side, setSide] = useState(initialSide);
    const [startTime, setStartTime] = useState(null);
    const [clearCanvas, setClearCanvas] = useState(false);
    const [starting, setStarting] = useState();
    const [mousePos, setMousePos] = useState({});
    const [disabled, setDisabled] = useState({ square: false, option: true });
    const [open, setOpen] = useState(false);
    const [end, setEnd] = useState(false);

    const { mouseData, startTracking, stopTracking, lastTimestamp } = useMouseTracker();
    const { message, deadline, meetMovementDeadline, resetDeadlines } = useDeadlines(startTime);

    const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (disabled.option) {
            if (mousePos.y <= starting - 50) {
                meetMovementDeadline();
                setDisabled({ ...disabled, option: false });
            }
        }
    }, [mousePos, starting, meetMovementDeadline]);

    const handleStartButtonClick = () => {
        setStartTime(Date.now());
        setStarting(mousePos.y);
        startTracking();
        setClearCanvas(true);
        setDisabled({ ...disabled, square: true });
    };

    const handleResponseSelection = () => {
        stopTracking();
        const rt = lastTimestamp;
        const newTrial = {
            id: trialCount + 1,
            side,
            rt,
            tracking: mouseData
        };
        console.log('Trial:', newTrial); // Replace with actual logging or further processing
        resetTrial();
        resetDeadlines();
        setTrialCount(trialCount + 1);
    };

    const resetTrial = () => {
        if (deadline) {
            setClearCanvas(true);
        } else {
            setClearCanvas(false);
        }
        stopTracking();
        setStartTime(null);
        setStarting(null);
        setMousePos({});
        setDisabled({ square: false, option: true });
        resetDeadlines();
    };

    useEffect(() => {
        if (trialCount === initialTrialCount) {
            setSide(prevSide => (prevSide === 'left' ? 'right' : 'left'));
            setTrialCount(0);
            setEnd(true); // Indicate that calibration has ended
        }
    }, [trialCount, initialTrialCount]);

    useEffect(() => {
        if (deadline) {
            setOpen(true);
            const timeoutId = setTimeout(() => {
                setOpen(false);
                resetTrial();
            }, 1500);
            return () => clearTimeout(timeoutId);
        }
    }, [deadline]);

    return end ? (
        <div>Calibration completed</div>
    ) : (
        <div className={style.root}>
            <div className={style.canvas}>
                {trialCount > 0 && <TrajectoryCanvas mouseData={mouseData} clear={clearCanvas} />}
            </div>
            <div className={style.choice}>
                <ButtonMT disabled={side === 'right' || disabled.option} style={{ opacity: side === 'right' ? 0 : 1 }} onClick={handleResponseSelection}></ButtonMT>
                <ButtonMT disabled={side === 'left' || disabled.option} style={{ opacity: side === 'left' ? 0 : 1 }} onClick={handleResponseSelection}></ButtonMT>
            </div>
            <div className={style.start}>
                <Button className='outlined' onClick={handleStartButtonClick} disabled={disabled.square}>+</Button>
            </div>
            <Dialog open={open}>
                <div className={style.containerDialog}>
                    <Typography variant='h2'>Attention!</Typography>
                    <Typography variant='h4'>{message}</Typography>
                </div>
            </Dialog>
            <div className={style.count}>
                {trialCount}
            </div>
        </div>
    );
}

export default MTcalibration;
