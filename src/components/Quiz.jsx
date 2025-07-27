import React, { useState } from 'react';
import quizData from '../data/quizData';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Result from './Result';
import { useGSAP } from '@gsap/react';

const Quiz = ({ language, onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const gsap = useGSAP();

    const handleAnswer = (selectedAnswer) => {
        setUserAnswers([...userAnswers, selectedAnswer]);
        if (currentQuestionIndex < quizData.length - 1) {
            gsap.to('.question', {
                opacity: 0, duration: 0.5, onComplete: () => {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    gsap.fromTo('.question', { opacity: 0 }, { opacity: 1, duration: 0.5 });
                }
            });
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowResult(false);
    };

    return (
        <div className="quiz-container">
            <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={quizData.length} />
            {showResult ? (
                <Result answers={userAnswers} onRestart={handleRestart} />
            ) : (
                <div className="question">
                    <Question
                        question={quizData[currentQuestionIndex]?.question?.[language] || ""}
                        options={quizData[currentQuestionIndex]?.options || []}
                        onAnswer={handleAnswer}
                        language={language}
                    />
                </div>
            )}
        </div>
    );
};

export default Quiz;