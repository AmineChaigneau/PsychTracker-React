import { useState, useEffect } from 'react';

function useMouseTracker() {
    const [mouseData, setMouseData] = useState([]);
    const [tracking, setTracking] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [lastTimestamp, setLastTimestamp] = useState(null);

    const handleMouseMove = (event) => {
        if (tracking && startTime) {
            const time = Date.now() - startTime;
            setMouseData(prevData => [...prevData, { x: event.clientX, y: event.clientY, time }]);
            setLastTimestamp(time); 
        }
    };

    const startTracking = () => {
        setMouseData([]);  // Reset the mouse data
        setStartTime(Date.now());  // Set the startTime when tracking starts
        setTracking(true);  // Start tracking
    };

    const stopTracking = () => {
        setTracking(false);  // Stop tracking
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [tracking, startTime]);

    return { mouseData, startTracking, stopTracking, lastTimestamp };
}

export default useMouseTracker;
