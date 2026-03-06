"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaPaperPlane, FaTerminal, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Create a free account at https://emailjs.com, then:
// 1. Add an Email Service (Gmail) → copy the Service ID below
// 2. Create an Email Template with vars: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" to bilalahmsiddique@gmail.com in the template
// 3. Copy your Public Key (Account → API Keys)
const EMAILJS_SERVICE_ID = "service_mjfhfsp";   // ← replace with yours
const EMAILJS_TEMPLATE_ID = "template_5ryml6k";   // ← replace with yours
const EMAILJS_PUBLIC_KEY = "yKIKpwuV4h1Q9A_oC";     // ← replace with yours
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current!,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactLinks = [
        {
            href: "tel:+971502411686",
            icon: <FaPhoneAlt className="text-lg" />,
            label: "Phone",
            value: "+971 502411686",
        },
        {
            href: "mailto:bilalahmsiddique@gmail.com",
            icon: <FaEnvelope className="text-lg" />,
            label: "Email",
            value: "bilalahmsiddique@gmail.com",
        },
        {
            href: "https://linkedin.com/in/bilal-ahmed-siddique",
            icon: <FaLinkedin className="text-xl" />,
            label: "LinkedIn",
            value: "bilal-ahmed-siddique",
            external: true,
        },
    ];

    return (
        <section id="contact" className="py-28 relative w-full flex flex-col items-center bg-[#050505] overflow-hidden">
            {/* Radial gradient accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-gray-600 font-mono text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                        <FaTerminal className="text-xs" /> INIT_COMM_LINK
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Get in Touch</h2>
                    <div className="w-16 h-[2px] bg-white/30 mx-auto mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left: Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex flex-col gap-5 justify-center"
                    >
                        <p className="text-gray-500 text-base leading-relaxed mb-4">
                            Open to new opportunities, technical collaborations, and interesting projects. Drop a message and I'll get back to you.
                        </p>

                        {contactLinks.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-5 p-5 rounded-xl bg-[#0a0a0a] border border-gray-800/80 hover:border-white/20 hover:bg-[#111] transition-all duration-300 group"
                            >
                                <div className="w-11 h-11 rounded-lg bg-black border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-0.5 group-hover:text-gray-400 transition-colors">{item.label}</p>
                                    <p className="text-white font-mono text-sm tracking-wide">{item.value}</p>
                                </div>
                                <div className="ml-auto text-gray-700 group-hover:text-gray-400 transition-colors">→</div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="relative p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-gray-800/80 overflow-hidden">
                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                                    >
                                        <FaCheckCircle className="text-5xl text-white" />
                                        <h3 className="text-2xl font-bold text-white font-mono">Message Sent!</h3>
                                        <p className="text-gray-500 font-mono">Transmission received. I'll respond shortly.</p>
                                    </motion.div>
                                ) : status === "error" ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                                    >
                                        <FaExclamationCircle className="text-5xl text-red-400" />
                                        <h3 className="text-2xl font-bold text-white font-mono">Send Failed</h3>
                                        <p className="text-gray-500 font-mono text-sm">Check your EmailJS config or try emailing directly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5 relative z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <h3 className="text-xl font-bold text-white font-mono mb-2">Send a Message</h3>

                                        {/* Name + Email row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {[
                                                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                                                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                                            ].map((field) => (
                                                <div key={field.id} className="flex flex-col gap-1.5">
                                                    <label htmlFor={field.id} className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                                                        {field.label}
                                                    </label>
                                                    <div className={`relative rounded-lg border transition-all duration-200 ${focusedField === field.id ? "border-white/40 shadow-[0_0_0_3px_rgba(255,255,255,0.05)]" : "border-gray-800"}`}>
                                                        <input
                                                            type={field.type}
                                                            id={field.id}
                                                            name={field.id}
                                                            value={formData[field.id as keyof typeof formData]}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocusedField(field.id)}
                                                            onBlur={() => setFocusedField(null)}
                                                            required
                                                            className="w-full bg-transparent px-4 py-3.5 text-white font-mono text-sm focus:outline-none placeholder:text-gray-700 rounded-lg"
                                                            placeholder={field.placeholder}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Message</label>
                                            <div className={`relative rounded-lg border transition-all duration-200 ${focusedField === "message" ? "border-white/40 shadow-[0_0_0_3px_rgba(255,255,255,0.05)]" : "border-gray-800"}`}>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField("message")}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    className="w-full bg-transparent px-4 py-3.5 text-white font-mono text-sm focus:outline-none resize-none placeholder:text-gray-700 rounded-lg"
                                                    placeholder="Tell me about your project or just say hello..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={status === "sending"}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full flex items-center justify-center gap-3 bg-white text-black font-mono font-bold py-4 rounded-lg hover:bg-gray-100 transition-all mt-2 disabled:opacity-60 group"
                                        >
                                            {status === "sending" ? (
                                                <span className="flex items-center gap-2">
                                                    <motion.span
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                        className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                                                    />
                                                    SENDING...
                                                </span>
                                            ) : (
                                                <>
                                                    SEND MESSAGE
                                                    <FaPaperPlane className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="text-center text-gray-700 text-xs font-mono">
                                            Sends directly to bilalahmsiddique@gmail.com
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
