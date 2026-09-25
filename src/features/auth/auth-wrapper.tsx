import Image from 'next/image'
import cover from "@public/auth-cover.svg"
import React from 'react'

function AuthWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <Image src={cover} alt='cover' className='w-full h-full pt-10' />
                {children}
            </div>

        </div>
    )
}

export default AuthWrapper