import React from 'react'
import type { Business } from '../types'
import Image from 'next/image'

export default function BusinessCard({ business }: { business: Business }) {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="relative aspect-square w-full">
                <Image
                    fill
                    src={business.src}
                    alt={business.title}
                    className="object-cover rounded-lg"
                />
            </div>
            <span className="text-lg font-medium">
                {business.title}
            </span>
            <div className="flex gap-2.5 text-sm text-gray-500">
                <span>{business.category}</span>
            </div>
        </div>
    )
}
