import gsap from "gsap";
import { useState } from "react";
import LandingPage from "./components/Landing";
import PrologPage from "./components/PrologPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroParallax from "./components/HeroParallax";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [page, setPage] = useState("hero");
  const [lang, setLang] = useState("id");
  const [userData, setUserData] = useState({ name: "", ig: "" });
  const [result, setResult] = useState(null);

  return (
    <main className="bg-[#043f3a] text-white">
      <HeroParallax />
      <LandingPage lang={lang} setLang={setLang} setUserData={setUserData} />
      <PrologPage lang={lang} />
      <QuizPage
        lang={lang}
        onFinish={(score) => {
          setResult(score);
          // Scroll ke bawah pakai ref/gsap
        }}
      />
      <ResultPage
        score={result}
        lang={lang}
        onRestart={() => {
          setResult(0);
          // Scroll ke atas pakai ref/gsap
        }}
      />
    </main>
  );
}

export default App;
