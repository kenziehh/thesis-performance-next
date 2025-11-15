import { formatDate } from '@/shared/lib/format'
import Image from 'next/image'
import { Research } from '../types'

export default function ResearchCard({ research }: { research: Research }) {
    return (
        <div className="containerw-full min-w-full flex flex-1 flex-col gap-3" >
            <div className="relative aspect-video min-h-80 md:min-w-full">
                <Image fill src={research.src} alt={research.title} className="object-cover rounded-lg" />
            </div>
            <span className='text-lg'>
                {research.title}
            </span>
            <div className='flex gap-2.5 text-sm'>
                <span>{research.category}</span>
                <span className='text-gray-500'>{formatDate(research.date)}</span>
            </div>
        </div>
    )
}
