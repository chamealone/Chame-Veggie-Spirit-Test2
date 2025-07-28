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
            onFinish(totalScore);
        }
    };

    const question = questions[current];

    const progress = ((current + 1) / questions.length) * 100;

    return (
        <section className="section active min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-900 px-4">
            <div className="w-full max-w-xl text-white text-center space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-6 min-h-[64px] leading-relaxed">
                        {question.question_text[lang]}
                    </h2>

                    <div className="grid gap-4">
                        {question.options.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(opt.value)}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all px-6 py-3 rounded-full text-sm font-medium"
                            >
                                {opt.text[lang]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Status dan Progress Bar */}
                <div className="space-y-2">
                    <p className="text-sm opacity-80">
                        {lang === "id"
                            ? `Pertanyaan ${current + 1} dari ${questions.length}`
                            : `Question ${current + 1} of ${questions.length}`}
                    </p>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-500 ease-in-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizPage;
