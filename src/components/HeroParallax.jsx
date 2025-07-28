import { useEffect, useRef } from "react";
import gsap from "gsap";

const characters = [
    "onyun-glow", "gowlic-glow", "banion-glow", "kroot-glow",  //left
    "mubii-glow", "bitty-glow", "gingeer-glow", "potatoad-glow"//right
];

const characterPositions = [
    { top: "5%", left: "5%" },
    { top: "25%", left: "10%" },
    { top: "45%", left: "10%" },
    { top: "60%", left: "5%" },
    { top: "5%", right: "5%" },
    { top: "25%", right: "10%" },
    { top: "40%", right: "10%" },
    { top: "60%", right: "5%" },
];

const HeroParallax = ({ onScrollComplete }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in seluruh section saat muncul
            //   gsap.from(containerRef.current, {
            //     autoAlpha: 0,
            //     scale: 0.98,
            //     duration: 1,
            //     ease: "power2.out",
            //   });

            // Parallax masuk saat scroll
            characters.forEach((_, i) => {
                gsap.to(`.parallax-character-${i}`, {
                    y: "+=10",
                    duration: 2 + Math.random(),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

            // Fade to next section
            gsap.to(containerRef.current, {
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    onLeave: () => onScrollComplete?.(),
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [onScrollComplete]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black text-white"
        >

            {/* Credit */}
            <span className="absolute top-4 right-4 text-xs md:text-sm text-white/80 z-20 font-light">
                by <span className="font-semibold">@chamealone</span> ×{" "}
                <span className="font-semibold">@yozzylazzy</span>
            </span>

            <img
                src="/images/landing/bg.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <img
                src="/images/landing/text.png"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[40%] max-w-[500px] z-10"
                alt="text"
            />

            {characters.map((char, idx) => (
                <img
                    key={idx}
                    src={`/images/landing/${char}.png`}
                    className={`parallax-character-${idx} absolute w-26 md:w-32 lg:w-36`}
                    style={{
                        ...characterPositions[idx],
                        zIndex: 5,
                    }}
                    alt={char}
                />
            ))}

            <img
                src="/images/landing/chame.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1024px] md:max-h-[60vh] object-contain z-10"
                alt="chame"
            />
        </section>
    );
};

export default HeroParallax;
