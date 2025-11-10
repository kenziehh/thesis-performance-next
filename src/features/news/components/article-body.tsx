import React from 'react'
import articleData from '../data/article.json'

export default function ArticleBody() {
    const article = JSON.stringify(articleData);
    const articleParsed = JSON.parse(article);
    return (
        <section className="prose max-w-none prose-p:leading-relaxed prose-headings:scroll-mt-20">
            <h1 className="text-3xl font-bold mb-6">{articleParsed.title}</h1>
            {articleParsed.subheads.map((section: { heading: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; paragraphs: any[]; }, index: React.Key | null | undefined) => (
                <div key={index} className="mt-8">
                    <h2 className="mt-8 text-2xl font-semibold text-primary">{section.heading}</h2>
                    {section.paragraphs.map((p, i) => (
                        <p key={i} className="mt-2 text-justify">
                            {p}
                        </p>
                    ))}
                </div>
            ))}
        </section>
    )
}
