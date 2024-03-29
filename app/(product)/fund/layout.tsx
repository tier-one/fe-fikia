// import Navbar from './components/Navbar'
import Navbar from '../../components/Navbar2';
import '../../globals.css'
import { Inter, Jost } from 'next/font/google'
import AuthProvider from '@/app/components/AuthProvider';
import SideBar from '@/app/components/SideBar';
import ToastProvider from "@/app/components/ToastProvider"

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Investments made easy.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={jost.className}>
      <ToastProvider>
        <AuthProvider>
          <Navbar />
          <div className='flex'>
            <SideBar />
            {children}
          </div>
        </AuthProvider>
      </ToastProvider>
      </body>
    </html>
  )
}
