import { useState, useEffect, useRef } from 'react';

function useMouseTrackerFixedRate(sampleRateMs = 10) {
    const [mouseData, setMouseData] = useState([]);
    const [tracking, setTracking] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [lastTimestamp, setLastTimestamp] = useState(null);
    const currentMousePosition = useRef({ x: 0, y: 0 });
    const intervalRef = useRef(null);

    const handleMouseMove = (event) => {
        currentMousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const startTracking = () => {
        setMouseData([]); // Reset the mouse data
        setStartTime(Date.now()); // Set the startTime when tracking starts
        setTracking(true); // Start tracking
        intervalRef.current = setInterval(() => {
            const time = Date.now() - startTime;
            setMouseData(prevData => [...prevData, { ...currentMousePosition.current, time }]);
            setLastTimestamp(time);
        }, sampleRateMs);
    };

    const stopTracking = () => {
        setTracking(false); // Stop tracking
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(intervalRef.current);
        };
    }, []);

    return { mouseData, startTracking, stopTracking, lastTimestamp };
}

export default useMouseTrackerFixedRate;
