import React from 'react'
import SectionHeader from './section-header'
import BusinessCard from './business-card'
import { Business } from '../types'

export default function BusinessSection({ business }: { business: Business[] }) {
    return (
        <section className="py-8 flex flex-col gap-6 p-6 container bg-white">
            <SectionHeader title="OpenAI untuk Bisnis" href="/business" />

            <div className="hidden lg:grid grid-cols-3 gap-6">
                {business.map((b) => (
                    <BusinessCard key={b.title} business={b} />
                ))}
            </div>

            <div className="flex lg:hidden gap-4 w-full overflow-x-auto pb-4">
                {business.map((b) => (
                    <div key={b.title} className="flex-shrink-0 w-[75%] sm:w-[60%] md:w-[45%]">
                        <BusinessCard business={b} />
                    </div>
                ))}
            </div>
        </section>
    )
}
