import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-primary-dark relative z-50 py-4 shadow-md">
        <div className='container mx-auto px-4 sm:px-6 lg:px-36'>
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center justify-center">
                    <a href="/">
                       <Image src="/misael_logo.png" width={46} height={46} alt='logo'/>
                    </a>
                </div>
               <NavBar />
            </div>
        </div>
    </header>
  )
}
