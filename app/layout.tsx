import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarot Readings',
  description: 'Tarot card readings with AI interpretation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
