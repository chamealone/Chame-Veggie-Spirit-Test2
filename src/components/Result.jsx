import { useGSAP } from '@gsap/react';
import React from 'react';

const Result = ({ result, onShare }) => {
    if (!result) return <div>No result to show.</div>;
    const { personalityType, image, description } = result;
    const gsapRef = useGSAP();

    return (
        <div ref={gsapRef} className="result-container">
            <h2>Your Spirit Veggie is: {personalityType}</h2>
            <img src={image} alt={`${personalityType} result`} className="result-image" />
            <p>{description}</p>
            <button onClick={onShare} className="share-button">Share Your Result</button>
        </div>
    );
};

export default Result;