"use client"

import React, { useEffect, useRef } from "react"
import SectionHeader from "./section-header"
import { Research } from "../types"
import ResearchCard from "./research-card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function LatestResearch({ researchs }: { researchs: Research[] }) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        const scroller = document.querySelector("[data-scroll-container]")

        if (!sectionRef.current) return

        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                scroller: scroller || window,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        })

        cardRefs.current.forEach((card, i) => {
            if (!card) return

            const direction = i % 2 === 0 ? -80 : 80

            gsap.from(card, {
                opacity: 0,
                x: direction,
                duration: 0.9,
                delay: i * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    scroller: scroller || window,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            })
        })
    },
        { scope: sectionRef }
    )

    return (
        <section
            ref={sectionRef}
            className="container py-8 flex flex-col gap-6 p-6 bg-white"
        >
            <SectionHeader title="Riset Terbaru" href="/research" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchs.map((research, i) => (
                    <div key={research.title} ref={(el) => { (cardRefs.current[i] = el) }}>
                        <ResearchCard research={research} />
                    </div>
                ))}
            </div>
        </section>
    )
}
