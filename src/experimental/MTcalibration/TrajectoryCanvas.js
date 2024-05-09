import { useEffect, useRef } from 'react';

function TrajectoryCanvas({ mouseData, clear }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (clear) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        // Draw the participant's trajectory
        context.beginPath();
        context.strokeStyle = '#FF0000';
        context.lineWidth = 2;
        mouseData.forEach((point, index) => {
            if (index === 0) {
                context.moveTo(point.x, point.y);
            } else {
                context.lineTo(point.x, point.y);
            }
        });
        context.stroke();

        // Draw the direct trajectory
        const firstPoint = mouseData[0];
        const lastPoint = mouseData[mouseData.length - 1];
        context.beginPath();
        context.strokeStyle = '#737373';
        context.moveTo(firstPoint.x, firstPoint.y);
        context.lineTo(lastPoint.x, lastPoint.y);
        context.stroke();

    }, [mouseData, clear]);

    return (
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ pointerEvents: 'none' }}/>
    );
}

export default TrajectoryCanvas;
