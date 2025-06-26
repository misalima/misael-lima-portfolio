import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-primary-dark py-16 lg:py-24 px-4 sm:px-6 lg:px-36">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Profile Image */}
                    <div className="hidden lg:flex justify-center lg:justify-start">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl aspect-square">
                                <Image
                                    src="/misael.webp"
                                    alt="Misael Lima"
                                    width={384}
                                    height={384}
                                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" aria-hidden="true"></div>
                        </div>
                    </div>

                    {/* Right Side - About Information */}
                    <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                                About 
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Me</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto lg:mx-0 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-white/90">
                            <p className="text-lg lg:text-xl leading-relaxed">
                                I'm a passionate Full Stack Developer with a love for creating innovative digital solutions. 
                                My journey in technology has been driven by curiosity and a desire to build applications 
                                that make a meaningful impact.
                            </p>
                            
                            <p className="text-lg lg:text-xl leading-relaxed">
                                With expertise spanning both frontend and backend development, I enjoy tackling complex 
                                challenges and turning ideas into reality. I believe in writing clean, efficient code 
                                and creating user experiences that are both beautiful and functional.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-primary mb-3">Frontend</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>• React & Next.js</li>
                                        <li>• TypeScript</li>
                                        <li>• Tailwind CSS</li>
                                        <li>• Responsive Design</li>
                                    </ul>
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-primary mb-3">Backend</h3>
                                    <ul className="space-y-2 text-white/80">
                                        <li>• Node.js</li>
                                        <li>• Database Design</li>
                                        <li>• API Development</li>
                                        <li>• Cloud Services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                            <a 
                                href="/resume.pdf" 
                                download="Misael_Lima_Resume.pdf"
                                className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden group inline-block text-center"
                            >
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 gradient-primary-reverse"></span>
                                <span className="relative z-10">Download Resume</span>
                            </a>
                            <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}