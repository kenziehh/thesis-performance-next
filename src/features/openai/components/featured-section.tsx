
"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

interface FeaturedCard {
  id: string
  image: string
  title: string
  description: string
  category: string
  time?: string
  date?: string
}

interface FeaturedSectionProps {
  title: string
  description: string
  date: string
  image: string
  cards: FeaturedCard[]
}

export function FeaturedSection({ title, description, date, image, cards }: FeaturedSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const rightListRef = useRef<HTMLDivElement>(null)
  const [canScrollPage, setCanScrollPage] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    const rightList = rightListRef.current

    if (!scrollContainer || !rightList) return

    const handleWheel = (e: WheelEvent) => {
      const isAtBottom = rightList.scrollHeight - rightList.scrollTop - rightList.clientHeight < 50
      const isAtTop = rightList.scrollTop < 50

      // Jika scroll ke bawah dan list tidak di bawah, scroll list
      if (e.deltaY > 0 && !isAtBottom) {
        e.preventDefault()
        rightList.scrollTop += e.deltaY
      }
      // Jika scroll ke atas dan list tidak di atas, scroll list
      else if (e.deltaY < 0 && !isAtTop) {
        e.preventDefault()
        rightList.scrollTop += e.deltaY
      }
      // Jika di posisi akhir, izinkan page scroll
      else if ((e.deltaY > 0 && isAtBottom) || (e.deltaY < 0 && isAtTop)) {
        setCanScrollPage(true)
      }
    }

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement
      const isAtBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 50

      if (isAtBottom) {
        setCanScrollPage(true)
      } else {
        setCanScrollPage(false)
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    rightList.addEventListener("scroll", handleScroll)

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel)
      rightList.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="containerw-full bg-white py-6">
      <div className="p-6 flex gap-10 flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
        {/* Left Side - Sticky Featured Card */}
        <div className="hidden w-full md:flex flex-col gap-4 h-full ">
          <div className="relative w-full min-h-[600px]">
            <Image
              src="/openai/featured/atlas.png"
              alt="Featured Image"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="max-h-[600px]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl lg:text-5xl max-w-3xl">Memperkenalkan ChatGPT Atlas, browser dengan ChatGPT bawaan</h2>
            <div className="flex gap-3 ">
              <span>Produk</span>
              <span className="text-gray-500">10 menit baca</span>
            </div>
          </div>
        </div>

        {/* Right  Side - Scrollable List */}
        <div ref={scrollContainerRef} className="hidden md:block w-full lg:w-2/5 overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
          <div className="">
            {/* Mobile Featured Card */}
            <div className="md:hidden mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/openai/featured/atlas.png"
                  alt="Featured Image"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="max-h-[400px]"
                />              </div>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-sm text-gray-600">
                {description} <span className="font-semibold">{date}</span>
              </p>
            </div>

            {/* Cards List */}
            <div ref={rightListRef} className="space-y-6">
              {cards.map((card) => (
                <div key={card.id} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{card.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{card.category}</span>
                    {card.date && <span>{card.date}</span>}
                  </div>
                  {card.time && <p className="text-xs text-gray-500 mt-1">{card.time}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Mobile */}
        <div className="w-full md:hidden p-3" style={{ scrollBehavior: "smooth" }}>
          <div className="">
            {/* Mobile Featured Card */}
            <div className="md:hidden mb-8">
              <div className="relative rounded-2xl mb-4 shadow-lg overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
                <Image
                  src="/openai/featured/atlas.png"
                  alt="Featured Image"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl lg:text-5xl max-w-3xl">Memperkenalkan ChatGPT Atlas, browser dengan ChatGPT bawaan</h2>
                <div className="flex gap-3 ">
                  <span>Produk</span>
                  <span className="text-gray-500">10 menit baca</span>
                </div>
              </div>
            </div>

            {/* Cards List */}
            <div className="space-y-6">
              {cards.map((card) => (
                <div key={card.id} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg mb-4 shadow-md hover:shadow-lg transition-shadow">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{card.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{card.category}</span>
                    {card.date && <span>{card.date}</span>}
                  </div>
                  {card.time && <p className="text-xs text-gray-500 mt-1">{card.time}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}