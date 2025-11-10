import React from 'react'
import { Story } from '../types'
import SectionHeader from './section-header'
import StoryCard from './story-card'

export default function StorySection({ stories }: { stories: Story[] }) {
    return (
        <section className="container py-8 flex-1 flex flex-col gap-6 p-6 bg-white">
            <SectionHeader title="Kisah" href="/news" />

            <div className="hidden md:block w-full">
                <div className="columns-3 gap-6">
                    {stories.map((story) => (
                        <div
                            key={story.title}
                            className="break-inside-avoid mb-6"
                        >
                            <StoryCard story={story} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex md:hidden gap-4 w-full overflow-x-auto pb-4">
                {stories.map((story) => (
                    <div key={story.title} className="flex-shrink-0 w-[75%]">
                        <StoryCard story={story} />
                    </div>
                ))}
            </div>
        </section>
    )
}
