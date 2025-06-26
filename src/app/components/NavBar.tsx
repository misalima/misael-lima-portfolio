"use client"
import React, { useState } from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <nav className="flex items-center justify-between p-4">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-12">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="text-white hover:text-light-blue transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-light-blue to-secondary transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Download Button */}
                <a
                    href="#"
                    className="hidden md:block ml-8 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                    style={{
                        background: 'linear-gradient(135deg, #9358f7 0%, #6197ee 50%, #10d7e2 100%)',
                    }}
                >
                    <span 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                        style={{
                            background: 'linear-gradient(315deg, #9358f7 0%, #6197ee 50%, #10d7e2 100%)',
                        }}
                    ></span>
                    <span className="relative z-10">Download Resume</span>
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    ></span>
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-primary-dark shadow-lg transition-all duration-300 z-40 ${
                    isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 pointer-events-none'
                }`}
            >
                <div className="px-4 py-3 space-y-1">
                    {navItems.map((item, index) => (
                        <div key={item.name}>
                            <a
                                href={item.href}
                                className="block text-white hover:text-light-blue transition-all duration-300 py-3 text-lg text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                            {index < navItems.length - 1 && (
                                <div className="border-b border-gray-600 opacity-30 mt-3"></div>
                            )}
                        </div>
                    ))}
                    <a
                        href="#"
                        className="block w-full mt-6 px-4 py-4 rounded-full text-white text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                        style={{
                            background: 'linear-gradient(135deg, #9358f7 0%, #6197ee 50%, #10d7e2 100%)',
                        }}
                        onClick={() => setIsOpen(false)}
                    >
                        <span 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                            style={{
                                background: 'linear-gradient(315deg, #9358f7 0%, #6197ee 50%, #10d7e2 100%)',
                            }}
                        ></span>
                        <span className="relative z-10">Download Resume</span>
                    </a>
                </div>
            </div>
        </>
  )
}
