import Link from 'next/link'
import React from 'react'

export default function CTA() {
    return (
        <section className="container w-full bg-gray-100 py-32 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Mulai dengan ChatGPT</h2>
                <Link href="/download"  className="px-6 py-2 bg-gray-200 text-black rounded-2xl hover:bg-gray-300 transition-colors">
                    Unduh
                </Link>
            </div>
        </section>
    )
}
