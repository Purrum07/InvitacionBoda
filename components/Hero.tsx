"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <section
                className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/images/IMG_20220917_165855851.jpg')" }}
            >
                {/* Overlay animado */}
                <div
                    className={`absolute inset-0 transition-all duration-2000
        ${visible ? "bg-black/50" : "bg-black/100"}`}
                ></div>

                {/* Contenido */}
                <div
                    className={`relative z-10 text-center text-white px-6
        transition-all duration-2000 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                >
                    <p
                        className="tracking-widest mb-4 font-montserrat"
                        style={{ letterSpacing: "0.3em" }}
                    >
                        NOS CASAMOS
                    </p>

                    <h1 className="text-5xl md:text-7xl mb-6 font-[var(--font-playfair)]">
                        Mario & Saira
                    </h1>

                    <div className="w-24 h-px bg-white mx-auto mb-6"></div>

                    <p className="text-xl md:text-2xl tracking-widest font-montserrat">
                        16 · MAYO · 2026
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 w-full flex justify-center">
                    <div className="animate-bounce text-white text-2xl opacity-80">
                        ↓
                    </div>
                </div>
            </section>
            <Countdown />
            <ParentsAndGodparents />
            <EventDetails/>

        </>


    );
}

import Countdown from "./Countdown";
import ParentsAndGodparents from "./ParentsAndGodparents";
import EventDetails from "./EventDetails";