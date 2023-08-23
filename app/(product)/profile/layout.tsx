// import Navbar from './components/Navbar'
import Navbar from '../../components/Navbar2';
import '../../globals.css'
import { Inter, Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Investments made easy.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={jost.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}