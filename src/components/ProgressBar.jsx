import React from 'react';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ProgressBar = ({ progress }) => {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        gsap.to(setBarWidth, {
            duration: 0.5,
            value: progress,
            onUpdate: () => setBarWidth(barWidth),
        });
    }, [progress]);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${barWidth}%` }} />
        </div>
    );
};

export default ProgressBar;