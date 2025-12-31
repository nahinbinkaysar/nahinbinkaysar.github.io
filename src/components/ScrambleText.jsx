import { useEffect, useRef } from "react";

function useScrambleText(duration = 750) {
    const ref = useRef(null);
    const chars = "!<>-_\\/[]{}—=+*^?#@%&|~";

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const text = el.getAttribute("data-text") || el.textContent?.trim() || "";
        let timer = null;
        let startTime = null;
        let interval = null;
        let isScrambling = false;

        const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

        const update = () => {
            if (startTime === null || !isScrambling) return;

            const progress = (Date.now() - startTime) / duration;

            if (progress >= 1) {
                el.textContent = text;
                return;
            }

            const scrambled = text
                .split("")
                .map((char, index) => {
                    if (progress > 0.7) {
                        const revealed = Math.floor(((progress - 0.7) / 0.3) * text.length);
                        return index < revealed ? char : getRandomChar();
                    }
                    return getRandomChar();
                })
                .join("");

            el.textContent = scrambled;
            timer = window.setTimeout(update, 50);
        };

        const start = () => {
            if (timer !== null) {
                clearTimeout(timer);
                timer = null;
            }
            isScrambling = true;
            startTime = Date.now();
            update();
        };

        const restart = () => {
            start();
            if (interval !== null) clearInterval(interval);
            interval = setInterval(start, 7000);
        };

        const stop = () => {
            isScrambling = false;
            if (timer !== null) {
                clearTimeout(timer);
                timer = null;
            }
            if (interval !== null) {
                clearInterval(interval);
                interval = null;
            }
        };

        // IntersectionObserver to start/stop on visibility
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        restart();
                    } else {
                        stop();
                    }
                });
            },
            { root: null, threshold: 0.2, rootMargin: "0px" }
        );

        observer.observe(el);

        return () => {
            stop();
            observer.disconnect();
        };
    }, [duration]);

    return ref;
}

function ScrambleText({ text, delay = 0, duration = 750, className = "" }) {
    const ref = useRef(null);
    const chars = "!<>-_\\/[]{}—=+*^?#@%&|~";

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let timer = null;
        let startTime = null;
        let interval = null;
        let isScrambling = false;
        let delayTimer = null;

        const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)];

        const update = () => {
            if (startTime === null || !isScrambling) return;

            const progress = (Date.now() - startTime) / duration;

            if (progress >= 1) {
                el.textContent = text;
                return;
            }

            const scrambled = text
                .split("")
                .map((char, index) => {
                    if (progress > 0.7) {
                        const revealed = Math.floor(((progress - 0.7) / 0.3) * text.length);
                        return index < revealed ? char : getRandomChar();
                    }
                    return getRandomChar();
                })
                .join("");

            el.textContent = scrambled;
            timer = window.setTimeout(update, 50);
        };

        const start = () => {
            if (timer !== null) {
                clearTimeout(timer);
                timer = null;
            }
            isScrambling = true;
            startTime = Date.now();
            update();
        };

        const restart = () => {
            start();
            if (interval !== null) clearInterval(interval);
            interval = setInterval(start, 7000);
        };

        const stop = () => {
            isScrambling = false;
            if (timer !== null) clearTimeout(timer);
            if (interval !== null) clearInterval(interval);
            if (delayTimer !== null) clearTimeout(delayTimer);
            timer = null;
            interval = null;
            delayTimer = null;
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        delayTimer = setTimeout(restart, delay);
                    } else {
                        stop();
                    }
                });
            },
            { root: null, threshold: 0.2, rootMargin: "0px" }
        );

        observer.observe(el);

        return () => {
            stop();
            observer.disconnect();
        };
    }, [text, delay, duration]);

    return (
        <span ref={ref} className={className}>
            {text}
        </span>
    );
}

export { ScrambleText, useScrambleText };
