// src/components/QuizPage.jsx
import { useState } from "react";
import { questions } from "../data/quizData";

const QuizPage = ({ lang, onFinish }) => {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (value) => {
        const newAnswers = [...answers];
        newAnswers[current] = value;
        setAnswers(newAnswers);

        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            const totalScore = newAnswers.reduce((a, b) => a + b, 0);
            onFinish(totalScore); // langsung kirim skor
        }
    };

    const question = questions[current];

    return (
        <section className="section active container mx-auto p-6 text-white text-center">
            <h2 className="text-xl font-bold mb-4">
                {question.question_text[lang]}
            </h2>
            <div className="grid gap-4">
                {question.options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => handleAnswer(opt.value)}
                        className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-full"
                    >
                        {opt.text[lang]}
                    </button>
                ))}
            </div>
            <p className="mt-4 text-sm">
                {lang === "id"
                    ? `Pertanyaan ${current + 1} dari ${questions.length}`
                    : `Question ${current + 1} of ${questions.length}`}
            </p>
        </section>
    );
};

export default QuizPage;
