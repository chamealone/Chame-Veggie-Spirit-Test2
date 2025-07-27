import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Question = ({ question, options = [], onAnswer, language }) => {
    const ref = useRef();

    const handleAnswer = (option) => {
        onAnswer(option);
    };

    useEffect(() => {
        if (ref.current) {
            gsap.from(ref.current, { opacity: 0, y: -50, duration: 0.5 });
        }
    }, [question]);

    return (
        <div ref={ref} className="question-container">
            <h2 className="question-text">{question}</h2>
            <div className="options-container">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
                        onClick={() => handleAnswer(option.spirits)}
                    >
                        {option.text?.[language] || option.text?.en || ""}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;