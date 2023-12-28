import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import { StateProvider } from '@/stateProvider'
import reducer,{initialState} from '@/reducer'
import CartProvider from '@/providers/CartProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-SHOP',
  description: 'Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`text-slate-700`}>
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <NavBar/>
            <main className='flex-grow'>
            {children}
            </main>
            <Footer/>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
