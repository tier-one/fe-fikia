import Navbar from './components/Navbar'
import './globals.css'
import { Inter, Jost } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Fikia',
  description: 'Investments made easy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
