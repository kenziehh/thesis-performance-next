import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NewsCard from './news-card'
import { News } from '../types'
import SectionHeader from './section-header'

export default function LatestNews({ news }: { news: News[] }) {
    return (
        <section className='container py-8 flex flex-col gap-6 p-6 bg-white'>
            <SectionHeader title='Berita Terbaru' href='/news' />
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-6'>
                {news.map((item) => (
                   <NewsCard key={item.title} news={item} />
                ))}
            </div>
        </section>
    )
}
