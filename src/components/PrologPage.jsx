// src/components/PrologPage.jsx
import { useState } from "react";

const prologContent = {
    id: [
        "Apakah kamu pernah merasa tidak cocok dengan stereotype zodiakmu?",
        "Atau merasa hasil tes MBTI-mu berbeda tergantung suasana hati?",
        "Tenang, kamu tidak sendiri!",
        "Tes ini membantumu menemukan sayur yang paling menggambarkan dirimu.",
        "Tidak perlu berpikir keras, cukup jujur menjawab apa yang kamu rasa.",
        "Siap? Yuk mulai!"
    ],
    en: [
        "Have you ever felt your zodiac doesn't match your personality?",
        "Or that your MBTI test result changes with your mood?",
        "Relax, you're not alone!",
        "This test helps you find the vegetable that best represents you.",
        "No overthinking—just answer based on what feels right.",
        "Ready? Let's go!"
    ]
};

const PrologPage = ({ lang, onNext }) => {
    const [index, setIndex] = useState(0);
    const content = prologContent[lang];

    const handleNext = () => {
        if (index < content.length - 1) {
            setIndex(index + 1);
        } else {
            onNext(); // lanjut ke quiz
        }
    };

    return (
        <section className="section active container mx-auto p-6 text-white text-center">
            <p className="text-lg mb-6 min-h-[100px] transition-opacity duration-500 ease-in-out">
                {content[index]}
            </p>
            <button
                onClick={handleNext}
                className="bg-emerald-600 hover:bg-emerald-400 px-6 py-2 rounded-full"
            >
                {index === content.length - 1
                    ? lang === "id"
                        ? "Mulai Tes"
                        : "Start Quiz"
                    : lang === "id"
                        ? "Lanjut"
                        : "Next"}
            </button>
        </section>
    );
};

export default PrologPage;
