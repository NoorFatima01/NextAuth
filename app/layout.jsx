import './globals.css'
import { Inter } from 'next/font/google'
// import Navbar from './components/Nav'
import  AuthProvider  from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Auth Example',
  description: 'Uses credentials and github account to authenticate users',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthProvider> */}
        <AuthProvider>
        <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProvider>
         
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}

