"use client";

import { useEffect, useRef, useState } from "react";

interface CursorState {
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation: number;
}

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const stateRef = useRef<CursorState>({ x: -100, y: -100, vx: 0, vy: 0, rotation: 0 });
    const targetRef = useRef({ x: -100, y: -100 });
    const rafRef = useRef<number>(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const tick = () => {
            const state = stateRef.current;
            const target = targetRef.current;

            const prevX = state.x;
            const prevY = state.y;

            // Smooth follow with spring-like lerp
            state.x = lerp(state.x, target.x, 0.12);
            state.y = lerp(state.y, target.y, 0.12);

            state.vx = state.x - prevX;
            state.vy = state.y - prevY;

            const speed = Math.sqrt(state.vx ** 2 + state.vy ** 2);

            // Rotate based on movement direction
            if (speed > 0.1) {
                state.rotation = Math.atan2(state.vy, state.vx) * (180 / Math.PI) + 90;
            }

            // Stretch based on speed
            const stretch = Math.min(1 + speed * 0.04, 1.6);
            const squish = 1 / stretch;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `
                    translate(${state.x}px, ${state.y}px)
                    rotate(${state.rotation}deg)
                    scale(${squish}, ${stretch})
                    translate(-50%, -50%)
                `;
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            cancelAnimationFrame(rafRef.current);
        };
    }, [isVisible]);

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 20,
                height: 20,
                pointerEvents: "none",
                zIndex: 99999,
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease",
                willChange: "transform",
            }}
        >
            {/* Teardrop / arrow tip shape */}
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                style={{ display: "block" }}
            >
                <ellipse
                    cx="10"
                    cy="10"
                    rx="5"
                    ry="7"
                    fill="white"
                    style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))" }}
                />
            </svg>
        </div>
    );
}
