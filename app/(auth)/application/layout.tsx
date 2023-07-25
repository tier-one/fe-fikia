import '../../globals.css'
import { Inter, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Authentication',
  description: 'Investments made easy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        {children}
      </body>
    </html>
  )
}
