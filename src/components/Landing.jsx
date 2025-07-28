// src/components/LandingPage.jsx
import { useState } from "react";

const LandingPage = ({ onNext, lang, setLang, setUserData }) => {
    const [name, setName] = useState("");
    const [ig, setIg] = useState("");

    const handleLanguage = (selectedLang) => {
        setLang(selectedLang);
    };

    const handleNext = () => {
        if (name.trim() === "") {
            alert(lang === "id" ? "Nama wajib diisi" : "Name is required");
            return;
        }
        setUserData({ name, ig });
        onNext(); // Pindah ke Prolog
    };

    return (
        <section className="section active container mx-auto p-6 text-white flex flex-col gap-2 justify-center items-center min-h-screen">
            <h1 className="text-2xl text-center font-bold font-[Fredoka]">
                What's Your Spirit Veggie Test
            </h1>
            <div className="byline text-center italic text-sm mb-4">by Chamealone</div>

            <img

            />

            <div className="language-select flex justify-center gap-2 mb-4">
                <button
                    onClick={() => handleLanguage("id")}
                    className="bg-teal-700 hover:bg-teal-500 px-4 py-2 rounded-full"
                >
                    🇮🇩 Indonesia
                </button>
                <button
                    onClick={() => handleLanguage("en")}
                    className="bg-teal-700 hover:bg-teal-500 px-4 py-2 rounded-full"
                >
                    🇺🇸 English
                </button>
            </div>

            <div className="input-group mb-4">
                <label className="block mb-1">
                    {lang === "id" ? "Nama:" : "Name:"}
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg text-black"
                    placeholder={
                        lang === "id" ? "Masukkan nama..." : "Enter your name..."
                    }
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-group mb-4">
                <label className="block mb-1">
                    {lang === "id" ? "Instagram (opsional):" : "Instagram (optional):"}
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg text-black"
                    placeholder="@namamu"
                    value={ig}
                    onChange={(e) => setIg(e.target.value)}
                />
            </div>

            <button
                onClick={handleNext}
                className="next-btn bg-emerald-600 hover:bg-emerald-400 px-6 py-2 rounded-full mx-auto block"
            >
                Next
            </button>
        </section>
    );
};

export default LandingPage;
