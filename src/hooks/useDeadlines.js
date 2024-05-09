import { useState, useEffect, useRef } from 'react';

function useDeadlines(startTime) {
    const [movementDeadlineMet, setMovementDeadlineMet] = useState(false);
    const [message, setMessage] = useState('');
    const [deadline, setDeadline] = useState(false);
    const [endTime, setEndTime] = useState(null);

    const moveTimerRef = useRef(null);
    const responseTimerRef = useRef(null);

    useEffect(() => {
        if (startTime) {
            moveTimerRef.current = setTimeout(() => {
                if (!movementDeadlineMet) {
                    setMessage("Vous avez dépassé le délai maximum de 1,5 seconde. Vous devez déplacer la souris plus vite une fois le bouton + activé. L'essai va recommencer");
                    setDeadline(true);
                    setEndTime(Date.now());
                }
            }, 1500);
        }

        return () => {
            clearTimeout(moveTimerRef.current);
        };
    }, [startTime, movementDeadlineMet]);

    useEffect(() => {
        if (movementDeadlineMet && !deadline) {
            responseTimerRef.current = setTimeout(() => {
                setMessage("Vous avez dépassé le délai maximum de 2 secondes. Vous devez déplacer sélectionner la réponse plus rapidement. L'essai va recommencer.");
                setDeadline(true);
                setEndTime(Date.now());
            }, 2000);
        }

        return () => {
            clearTimeout(responseTimerRef.current);
        };
    }, [movementDeadlineMet, deadline]);

    const meetMovementDeadline = () => {
        setMovementDeadlineMet(true);
        clearTimeout(moveTimerRef.current);
    };

    const resetDeadlines = () => {
        setDeadline(false);
        setEndTime(null);
        setMovementDeadlineMet(false);
        clearTimeout(responseTimerRef.current);
    };

    return {
        message,
        deadline,
        endTime,
        meetMovementDeadline,
        resetDeadlines,
    };
}

export default useDeadlines;
