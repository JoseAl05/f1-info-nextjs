import { Nunito } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

export const metadata = {
  title: 'F1 Info',
  description: 'Web site dedicated to inform about the history of f1',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar/>
        </ClientOnly>
        <div>
          {children}
        </div>
        <ClientOnly>
          <Footer/>
        </ClientOnly>
      </body>
    </html>
  )
}
