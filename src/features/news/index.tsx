import React from 'react'
import Navbar from './components/navbar'
import Article from './components/article'
import { article } from './data/article'
import Footer from './components/footer'

export default function NewsMain() {
    return (
        <>
            <Navbar />
            <Article article={article} />
            <Footer />
        </>
    )
}
