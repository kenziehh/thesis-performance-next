import React from 'react'
import SectionHeader from './section-header'
import { Research } from '../types'
import ResearchCard from './research-card'

export default function LatestResearch({ researchs }: { researchs: Research[] }) {
    return (
        <section className='container py-8 flex flex-col gap-6 p-6 bg-white'>
            <SectionHeader title='Riset Terbaru' href='/research' />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchs.map((research) => (
                    <ResearchCard key={research.title} research={research} />
                ))}
            </div>

        </section>
    )
}
