import { formatDate } from '@/shared/lib/format'
import Image from 'next/image'
import React from 'react'
import { News } from '../types'

export default function NewsCard({ news }: { news: News }) {
    return (
        <div className='flex gap-3 items-center '>
            <div className='relative aspect-square min-h-32 md:min-h-48'>
                <Image alt={news.title} src={news.src} fill className='rounded-xl'/>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-sm md:text-lg line-clamp-3">{news.title}</h2>
                <div className="flex gap-3 text-xs md:text-sm">
                    <span className=''>{news.category}</span>
                    <span className="text-gray-500">{formatDate(news.date)}</span>
                </div>
            </div>
        </div>
    )
}
