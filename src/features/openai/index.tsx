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
import { featuredCards, mainFeatured } from './data/featured'
import { storyCards } from './data/story'
import { newsCards } from './data/news'
import { researchCards } from './data/research'
import { businessCards } from './data/business'

export default function HomeOpenAI() {
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false)
    const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true)


    
   


    return (
        <div className="flex h-screen bg-white">
            <div className="flex-1 flex flex-col">
                <Navbar onSidebarMobileToggle={() => setSidebarMobileOpen(!sidebarMobileOpen)} isSidebarMobileOpen={sidebarMobileOpen} onSidebarDekstopToggle={() => setSidebarDesktopOpen(!sidebarDesktopOpen)} isSidebarDekstopOpen={sidebarDesktopOpen} />
                <div className='flex flex-row'>
                    <Sidebar isSidebarDekstopOpen={sidebarDesktopOpen} onSidebarDekstopToggle={() => setSidebarDesktopOpen(!sidebarDesktopOpen)} onSidebarMobileToggle={() => setSidebarMobileOpen(!sidebarMobileOpen)} isSidebarMobileOpen={sidebarMobileOpen} />
                    <div className='md:max-w-[80vw] 0md:pl-10 flex flex-col flex-1 max-h-screen overflow-y-auto'>
                        <ChatArea />
                        <FeaturedSection title={mainFeatured.title} category={mainFeatured.category} minuteRead={mainFeatured.minuteRead} src={mainFeatured.src} featuredCards={featuredCards} />
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
