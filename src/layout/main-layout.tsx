import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-white text-neutral-900 selection:bg-red-100 selection:text-red-900">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout