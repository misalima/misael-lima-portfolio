import React from 'react'

export default function NavBar() {
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <nav className="flex items-center justify-between p-4">
                <ul className="flex space-x-12">
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
                <a
                    href="#"
                    className="ml-8 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
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
            </nav>
        </>
  )
}
