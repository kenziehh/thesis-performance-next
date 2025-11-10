"use client"
import { useState } from 'react'
import { ChatArea } from './components/chat-area'
import { FeaturedSection } from './components/featured-section'
import { Navbar } from './components/navbar'
import { Sidebar } from './components/sidebar'
import LatestNews from './components/latest-news'
import { Business, News, Research, Story } from './types'
import StorySection from './components/story-section'
import LatestResearch from './components/latest-research'
import { Footer } from './components/footer'
import CTA from './components/cta'
import BusinessSection from './components/business-section'

export default function HomeOpenAI() {
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false)
    const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true)
    const featuredCards = [
        {
            id: "1",
            image: "/openai/featured/featured1.png",
            title: "Dibangun untuk memberi manfaat bagi semua orang",
            description: "Perusahaan",
            category: "Perusahaan",
            date: "3 mesin baca",
        },
        {
            id: "2",
            image: "/openai/featured/featured2.png",
            title: "Memperkenalkan gpt-oss-safeguard",
            description: "Produk",
            category: "Produk",
            date: "10 menit baca",
        },
        {
            id: "3",
            image: "/openai/featured/featured3.png",
            title: "Sora 2 telah hadir",
            description: "Riset",
            category: "Riset",
            date: "8 menit baca",
        },

    ]

    const newsCards: News[] = [
        {
            src: "/openai/news/news1.png",
            title: "AWS and OpenAI announce multi-year strategic partnership",
            category: "Perusahaan",
            date: "2025-11-01",
        },
        {
            src: "/openai/news/news2.png",
            title: "Expanding Stargate to Michigan",
            category: "Perusahaan",
            date: "2025-10-30",
        },
        {
            src: "/openai/news/news3.png",
            title: "Memperkenalkan Aardvark: Peneliti keamanan berbasis agen dari OpenAI",
            category: "Keamanan",
            date: "2025-10-30",
        },
        {
            src: "/openai/news/news4.png",
            title: "Bab berikutnya dari kemitraan Microsoft-OpenAI",
            category: "Perusahaan",
            date: "2025-10-28",
        },
        {
            src: "/openai/news/news5.png",
            title: "Memperkuat respons ChatGPT dalam percakapan sensitif",
            category: "Keselamatan",
            date: "2025-10-27",
        },
        {
            src: "/openai/news/news6.png",
            title: "OpenAI acquires Software Applications Incorporated, maker of Sky",
            category: "Perusahaan",
            date: "2025-10-23",
        },
    ]

    const storyCards: Story[] = [
        {
            image: "/openai/story/story1.png",
            title: "Penogram dari desain dengan GPT-5",
            category: "GPT-5",
            date: "2025-08-07",
            size: "9 / 16",
            minuteRead: 2,

        },
        {
            image: "/openai/story/story2.png",
            title: "Penulisan kreatif dengan GPT-5",
            category: "GPT-5",
            date: "2025-08-07",
            size: "16 / 9",
            minuteRead: 2,

        },
        {
            image: "/openai/story/story3.png",
            title: "Riset media dengan GPT-5",
            category: "GPT-5",
            date: "2025-08-07",
            size: "1 / 1",
            minuteRead: 2,
        },
    ]

    const researchCards: Research[] = [
        {
            title: "Detecting and reducing scheming in AI models",
            date: "2025-09-25",
            src: "/openai/research/research1.png",
            category: "Riset",
        },
        {
            title: "Menguji kinerja model kami pada tugas dunia nyata",
            date: "2025-09-15",
            src: "/openai/research/research2.png",
            category: "Publikasi",
        },
    ]

    const businessCards: Business[] = [
        {
            title: "Mempertahankan pengetahuan dengan dukungan ChatGPT",
            category: "ChatGPT",
            src: "/openai/business/business1.png",          
        },
        {
            title: "Sistem pertahananan AI Doppel menghentikan serangan sebelum menyebar",
            category: "API",
            src: "/openai/business/business2.png",          
        },
         {
            title: "A law and tax firm redefines efficiency with ChatGPT Business",
            category: "ChatGPT",
            src: "/openai/business/business3.png",
        },
    ]   


    return (
        <div className="flex h-screen bg-white">
            <div className="flex-1 flex flex-col">
                <Navbar onSidebarMobileToggle={() => setSidebarMobileOpen(!sidebarMobileOpen)} isSidebarMobileOpen={sidebarMobileOpen} onSidebarDekstopToggle={() => setSidebarDesktopOpen(!sidebarDesktopOpen)} isSidebarDekstopOpen={sidebarDesktopOpen} />
                <div className='flex flex-row'>
                    <Sidebar isSidebarDekstopOpen={sidebarDesktopOpen} onSidebarDekstopToggle={() => setSidebarDesktopOpen(!sidebarDesktopOpen)} onSidebarMobileToggle={() => setSidebarMobileOpen(!sidebarMobileOpen)} isSidebarMobileOpen={sidebarMobileOpen} />
                    <div className='md:max-w-[80vw] 0md:pl-10 flex flex-col flex-1 max-h-screen overflow-y-auto'>
                        <ChatArea />
                        <FeaturedSection title="" description="" date="" image="" cards={featuredCards} />
                        <LatestNews news={newsCards} />
                        <StorySection stories={storyCards} />
                        <LatestResearch researchs={researchCards} />
                        <BusinessSection business={businessCards} />
                        <CTA />
                        <Footer />
                    </div>
                </div>

            </div>
        </div>
    )
}
