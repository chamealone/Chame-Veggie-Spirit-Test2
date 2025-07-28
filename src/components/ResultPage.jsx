// src/components/ResultPage.jsx
import { results } from "../data/results";

const ResultPage = ({ score, lang, onRestart }) => {
    const result = results.find((r) => score >= r.min && score <= r.max);

    if (!result) return <p className="text-white">No result found</p>;

    return (
        <section className="container text-white text-center p-8">
            <h2 className="text-2xl font-bold mb-4">
                {lang === "id" ? "Hasil Kamu Adalah" : "Your Result Is"}
            </h2>
            <h1 className="text-4xl font-extrabold mb-4">{result.name[lang]}</h1>
            <img
                src={result.image}
                alt={result.name.en}
                className="mx-auto mb-6 w-48 h-48 object-contain"
            />
            <p className="mb-8 text-lg">{result.desc[lang]}</p>

            <div className="flex justify-center gap-4">
                <button
                    onClick={onRestart}
                    className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-full"
                >
                    {lang === "id" ? "Coba Lagi" : "Try Again"}
                </button>
                <a
                    href={window.location.href}
                    className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full"
                    target="_blank"
                    rel="noreferrer"
                >
                    {lang === "id" ? "Bagikan" : "Share"}
                </a>
            </div>
        </section>
    );
};

export default ResultPage;
