"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    distance?: number;
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    distance = 40
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const directions = {
        up: `translateY(${distance}px)`,
        down: `translateY(${-distance}px)`,
        left: `translateX(${distance}px)`,
        right: `translateX(${-distance}px)`
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translate(0, 0)" : directions[direction],
                transition: `all ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98)`,
                transitionDelay: `${delay}s`,
                willChange: "transform, opacity"
            }}
        >
            {children}
        </div>
    );
}
