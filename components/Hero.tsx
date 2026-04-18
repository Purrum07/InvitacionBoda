"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["italic"],
});

const playfair = Playfair_Display({ subsets: ["latin"] });

const smoothEase = [0.4, 0, 0.2, 1] as const;
const bounceEase = [0.34, 1.56, 0.64, 1] as const;

interface HeroProps {
    onConfirm: () => void;
    onOpen: () => void;
}

export default function Hero({ onConfirm, onOpen }: HeroProps) {
    const [opened, setOpened] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showContent ? "auto" : "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showContent]);

    const handleOpen = () => {
        if (opened) return;

        setOpened(true);
        onOpen();

        setTimeout(() => {
            setShowContent(true);
        }, 450);
    };

    return (
        <>
            {/* ================= HERO ================= */}
            <motion.div
                className="relative z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{
                    duration: 1.2,
                    ease: smoothEase,
                    delay: 0.8,
                }}
            >
                <section
                    className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/Hero.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/50" />

                    <div
                        className={`relative z-10 text-center text-white px-6 max-w-3xl transition-all duration-[1400ms]
            ${showContent
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <p className={`${cormorant.className} text-2xl italic mb-6`}>
                            Nos casamos
                        </p>

                        <h1 className={`${playfair.className} text-6xl md:text-8xl mb-6`}>
                            Mario y Saira
                        </h1>

                        {/* CITA */}
                        <p
                            className={`${cormorant.className} text-lg md:text-xl italic leading-relaxed mb-6 opacity-90`}
                        >
                            “En el amor no hay temor, sino que el amor perfecto echa fuera el
                            temor.”
                            <br />
                            <span className="text-sm tracking-widest opacity-80">
                                (1 Juan 4,18)
                            </span>
                        </p>

                        <p className={`${playfair.className} tracking-[0.3em] uppercase`}>
                            16 · Mayo · 2026
                        </p>
                    </div>
                </section>

                <Countdown />
                <ParentsAndGodparents />
                <EventDetails />
                <Timeline />
                <DressCode />
                <GiftRegistry />
                <FAQ />
                <RSVP onConfirm={onConfirm} />
            </motion.div>

            {/* ================= FADE ================= */}
            <AnimatePresence>
                {opened && !showContent && (
                    <motion.div
                        className="fixed inset-0 bg-black z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: smoothEase,
                        }}
                    />
                )}
            </AnimatePresence>

            {/* ================= SOBRE ================= */}
            <AnimatePresence>
                {!showContent && (
                    <motion.section
                        key="envelope"
                        onClick={handleOpen}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: smoothEase,
                        }}
                        className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
                        style={{
                            background:
                                "radial-gradient(circle, #f8f5f0 60%, #eae3d9)",
                        }}
                    >
                        <div className="relative w-full max-w-2xl flex items-center justify-center">

                            <div
                                className="relative aspect-[4/3] w-full flex items-center justify-center"
                                style={{ perspective: 1400 }}
                            >
                                {/* BASE */}
                                <motion.div
                                    animate={{ scale: opened ? 0.98 : 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative w-[90%] max-w-md aspect-[3/2]"
                                >
                                    {/* CUERPO */}
                                    <div className="absolute inset-0 bg-[#f4efe7] rounded-lg shadow-md border border-[#e6ded2]" />

                                    {/* PLIEGUES */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: `
                        linear-gradient(135deg, transparent 49%, #e6ded2 50%, transparent 51%),
                        linear-gradient(-135deg, transparent 49%, #e6ded2 50%, transparent 51%)
                      `,
                                            opacity: 0.6,
                                        }}
                                    />

                                    {/* SOMBRA INTERNA */}
                                    <div className="absolute inset-0 shadow-inner rounded-lg opacity-40" />
                                </motion.div>

                                {/* SOLAPA */}
                                <motion.div className="absolute w-[90%] max-w-md aspect-[3/2] z-20">
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-1/2 origin-top"
                                        animate={{
                                            rotateX: opened ? 180 : 0,

                                        }}
                                        transition={{
                                            duration: 1.1,
                                            ease: bounceEase,
                                        }}
                                        style={{ transformOrigin: "50% 2%" }}
                                    >
                                        {/* FRONT */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                background: "#efe7db",
                                                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                                                borderTopLeftRadius: "12px",
                                                borderTopRightRadius: "12px",
                                            }}
                                        />

                                        {/* BACK */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                transform: "rotateX(180deg)",
                                                background: "#f4efe7",
                                                clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* SELLO */}
                                <motion.div
                                    animate={
                                        opened
                                            ? { y: -55, scale: 0.85, rotate: -8, opacity: 0 }
                                            : { y: 0, scale: 1, rotate: 0, opacity: 1 }
                                    }
                                    transition={{
                                        duration: 0.5,
                                        ease: smoothEase,
                                    }}
                                    className="absolute z-30"
                                >
                                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-[3px] border-[#8a6b2f] bg-[#caa96b] relative">
                                        <Image
                                            src="/images/sello.jpeg"
                                            alt="Sello"
                                            fill
                                            className="object-cover scale-125"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* ================= HINT BOTÓN ================= */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.8,
                            }}
                            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-40 pointer-events-none"
                        >
                            <p className={`${cormorant.className} text-lg text-[#6b5e4a] italic`}>
                                Fuiste invitado a nuestra boda
                            </p>

                            <motion.p
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeInOut",
                                }}
                                className="text-sm tracking-widest uppercase text-[#8a7a63] mt-2"
                            >
                                Toca para abrir
                            </motion.p>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}

/* IMPORTS */
import Countdown from "./Countdown";
import ParentsAndGodparents from "./ParentsAndGodparents";
import EventDetails from "./EventDetails";
import Timeline from "./Timeline";
import DressCode from "./DressCode";
import FAQ from "./FAQ";
import GiftRegistry from "./GiftRegistry";
import RSVP from "./RSVP";