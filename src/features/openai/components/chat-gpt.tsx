"use client"

import { Badge } from "@/shared/components/badge"
import { ArrowUp } from "lucide-react"
import { useState } from "react"

export function ChatGPT() {
  const [message, setMessage] = useState("")

  const suggestions = [
    "Pelajari tentang ChatGPT Business",
    "Cari dengan ChatGPT",
    "Berbicara dengan ChatGPT",
    "Riset",
    "Lainnya",
  ]

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-center text-foreground mb-8">Apa yang bisa saya bantu?</h1>

        {/* Input Area */}
        <div className="relative mb-8">
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Redigez une note de remerciement"
            className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition pr-14"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-3 xl:gap-6 justify-center">
          {suggestions.map((suggestion) => (
            <Badge
              key={suggestion}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition font-medium"
            >
              {suggestion}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
