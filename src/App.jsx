import gsap from "gsap";
import { useState } from "react";
import LandingPage from "./components/Landing";
import PrologPage from "./components/PrologPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroParallax from "./components/HeroParallax";
import PageWrapper from "./components/PageWrapper";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [page, setPage] = useState("hero");
  const [lang, setLang] = useState("id");
  const [userData, setUserData] = useState({ name: "", ig: "" });
  const [result, setResult] = useState(null);

  return (
    <main className="bg-[#043f3a] text-white relative overflow-hidden">
      <PageWrapper show={page === "hero"}>
        <HeroParallax onScrollComplete={() => setPage("landing")} />
      </PageWrapper>

      <PageWrapper show={page === "landing"}>
        <LandingPage lang={lang} setLang={setLang} setUserData={setUserData} onNext={() => setPage("prolog")} />
      </PageWrapper>

      <PageWrapper show={page === "prolog"}>
        <PrologPage lang={lang} onNext={() => setPage("quiz")} />
      </PageWrapper>

      <PageWrapper show={page === "quiz"}>
        <QuizPage
          lang={lang}
          onFinish={(score) => {
            setResult(score);
            setPage("result");
          }}
        />
      </PageWrapper>

      <PageWrapper show={page === "result"}>
        <ResultPage
          score={result}
          lang={lang}
          onRestart={() => {
            setResult(0);
            setPage("landing");
          }}
        />
      </PageWrapper>
    </main>
  );
}

export default App;
