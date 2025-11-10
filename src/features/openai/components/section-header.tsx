import Link from 'next/link'
import React from 'react'

export default function SectionHeader({ title, href }: { title: string, href: string }) {
    return (
        <div className='flex gap-4 justify-between w-full'>
            <h3 className='text-xl'>
                {title}
            </h3>
            <Link href={href} prefetch={false} className='text-md hover:text-gray-500'>
                Lihat semua
            </Link>
        </div>
    )
}
