import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Screenshot Smart Summarizer",
    "one_liner": "Transform your screenshots into concise summaries for quick understanding.",
    "why_now": "With remote work and online learning booming, quick summarization is essential.",
    "novel_mechanism": "Combines OCR with natural language processing to summarize extracted text.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Students can summarize lecture slides quickly.",
      "Professionals can condense meeting notes from screenshots."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Image upload",
        "Text extraction",
        "Summary generation"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public dataset of meeting notes",
        "user-generated summaries"
      ],
      "risk": [
        "accuracy in summarization",
        "data privacy"
      ],
      "mitigation": [
        "user feedback loop for continuous improvement",
        "anonymize user data"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Instantly get summaries of your posts",
        "Before/after comparison of text"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "LinkedIn"
      ],
      "pricing": {
        "free": "up to 5 summaries/month",
        "pro": "$9.99/month for unlimited",
        "business": "$29.99/month with team features"
      }
    },
    "moat": [
      "unique summarization algorithm",
      "user engagement and retention",
      "data-driven improvement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Unlike generic OCR tools, this product focuses on summarization, catering to a growing need in an educational and corporate landscape."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}