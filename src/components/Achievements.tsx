"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { value: 30, suffix: "%", label: "API Response Time Improvement", width: 80 },
    { value: 40, suffix: "%", label: "Compute Performance Optimization", width: 90 },
    { value: 100, suffix: "k+", label: "Cloud Records Managed", width: 100 },
    { value: 2, prefix: "Sub-", suffix: "s", label: "Search Performance", width: 75 },
];

function AnimatedCounter({ end, prefix = "", suffix = "", duration = 2 }: { end: number, prefix?: string, suffix?: string, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let startTimeout = setTimeout(() => {
                let startTime: number | null = null;
                const step = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                    const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    setCount(Math.floor(easeOutExpo * end));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }, 300);
            return () => clearTimeout(startTimeout);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 relative w-full bg-black overflow-hidden border-y border-gray-900">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 tracking-tight">SYSTEM_METRICS</h2>
                    <div className="w-24 h-[2px] bg-white/50 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="bg-[#0a0a0a] p-10 rounded-xl flex flex-col items-center text-center relative group border border-gray-800 hover:border-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] overflow-hidden"
                        >
                            {/* Animated Background Bar */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-white/5 -z-0"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${stat.width}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.4 + (idx * 0.1), ease: [0.25, 1, 0.5, 1] }}
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
                            </motion.div>

                            <div className="relative z-10 text-5xl md:text-6xl font-mono font-bold mb-4 text-white tracking-tight">
                                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <p className="relative z-10 text-gray-400 font-mono text-sm leading-snug uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
