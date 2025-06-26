import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-36 relative overflow-hidden pt-8 lg:pt-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:-mt-48">
                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight">
                            <span className="text-foreground/70 text-2xl lg:text-4xl xl:text-5xl font-normal">Hello, I'm</span>
                            <br />
                            <span className="bg-gradient-to-r from-primary-dark via-primary-dark to-primary-dark bg-clip-text text-transparent font-bold">
                                Misael Lima
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl xl:text-3xl text-foreground font-semibold max-w-lg">
                            Full Stack Developer & Creative Problem Solver
                        </p>
                    </div>
                    
                    <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
                        I craft exceptional digital experiences through innovative web solutions. 
                        Passionate about creating user-centric applications that make a difference.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                            View My Work
                        </button>
                        <button className="border-2 border-secondary text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                            Let's Connect
                        </button>
                    </div>
                </div>

                {/* Right Content - Hexagonal Image with Background Hexagons */}
                <div className="relative flex items-center justify-center">
                    {/* Background Decorative Hexagons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Light Blue Hexagon */}
                        <div className="absolute w-80 h-80 lg:w-96 lg:h-96 -translate-x-16 translate-y-12">
                            <Image
                                src="/light-blue-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-60"
                                style={{
                                    animation: "gentleRotate 12s ease-in-out infinite",
                                    transform: "rotate(25deg)"
                                }}
                            />
                        </div>
                        
                        {/* Lilac Hexagon */}
                        <div className="absolute w-72 h-72 lg:w-80 lg:h-80 translate-x-20 -translate-y-8">
                            <Image
                                src="/lilac-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-70"
                                style={{
                                    animation: "gentleRotateReverse 15s ease-in-out infinite",
                                    transform: "rotate(-18deg)"
                                }}
                            />
                        </div>

                        {/* Additional Decorative Hexagons */}
                        <div className="absolute w-28 h-28 -translate-x-32 -translate-y-24">
                            <Image
                                src="/gradient-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-45"
                                style={{
                                    animation: "gentleRotate 18s ease-in-out infinite",
                                    transform: "rotate(65deg)"
                                }}
                            />
                        </div>

                        <div className="absolute w-20 h-20 translate-x-36 translate-y-32">
                            <Image
                                src="/lilac-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-35"
                                style={{
                                    animation: "gentleRotateReverse 10s ease-in-out infinite",
                                    transform: "rotate(-40deg)"
                                }}
                            />
                        </div>

                        <div className="absolute w-16 h-16 translate-x-28 -translate-y-36">
                            <Image
                                src="/light-blue-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-40"
                                style={{
                                    animation: "gentleRotate 14s ease-in-out infinite",
                                    transform: "rotate(80deg)"
                                }}
                            />
                        </div>

                        {/* Extra scattered hexagons */}
                        <div className="absolute w-24 h-24 -translate-x-8 translate-y-40">
                            <Image
                                src="/gradient-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-30"
                                style={{
                                    animation: "gentleRotateReverse 20s ease-in-out infinite",
                                    transform: "rotate(15deg)"
                                }}
                            />
                        </div>

                        <div className="absolute w-32 h-32 translate-x-12 -translate-y-20">
                            <Image
                                src="/light-blue-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-25"
                                style={{
                                    animation: "gentleRotate 16s ease-in-out infinite",
                                    transform: "rotate(-55deg)"
                                }}
                            />
                        </div>

                        <div className="absolute w-18 h-18 -translate-x-20 -translate-y-8">
                            <Image
                                src="/lilac-hexagon.png"
                                alt=""
                                fill
                                className="object-contain opacity-35"
                                style={{
                                    animation: "gentleRotateReverse 22s ease-in-out infinite",
                                    transform: "rotate(35deg)"
                                }}
                            />
                        </div>
                    </div>

                    {/* Main Image Hexagon Container */}
                    <div className="relative z-10">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative">
                            <Image
                                src="/misael-hexagon.png"
                                alt="Misael Lima"
                                fill
                                className="object-contain hover:scale-110 hover:rotate-3 transition-all duration-700 ease-in-out"
                                priority
                                style={{
                                    animation: "float 6s ease-in-out infinite"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
