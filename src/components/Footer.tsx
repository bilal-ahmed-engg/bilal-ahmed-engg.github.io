"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative w-full py-12 overflow-hidden border-t border-white/10 mt-12 bg-black">
            {/* Glowing network lines decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>

            {/* Animated waves/lines at the bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-20 pointer-events-none">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[80px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-neon-blue"
                        animate={{
                            d: [
                                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            ]
                        }}
                    ></motion.path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center h-24">
                {/* Empty footer content as requested */}
            </div>
        </footer>
    );
}
