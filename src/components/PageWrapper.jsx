import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageWrapper = ({ children, show }) => {
    const ref = useRef();

    useEffect(() => {
        if (show) {
            gsap.fromTo(
                ref.current,
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, [show]);

    return (
        <div ref={ref} style={{ display: show ? "block" : "none" }}>
            {children}
        </div>
    );
}

export default PageWrapper;
