import { Header , Footer } from "@/components/headerfooter";
import Image from "next/image";
import myPhoto from "@/app/assets/pic-aboutme.jpg";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
            <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-10">

                <Header />
                
                <main className="space-y-10">

                    <div className="flex justify-center w-full">
                        <div className="flex flex-col items-center border border-white/10 rounded-2xl p-2 bg-white/5 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
                            <Image
                                src={myPhoto}
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                priority
                                className="rounded-xl object-cover aspect-square"
                            />
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            About Me
                        </h1>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Hello! I'm Nattapoom Wilawan, also known online as haerinforever or kaiyang007. 
                                I am currently a Business Computer student at the Faculty of Business Administration, 
                                King Mongkut's University of Technology North Bangkok (KMUTNB), Rayong Campus
                            </p>
                            <p>
                                Currently, I am practicing web programming, web design for my future career, and graphic design. To be honest, 
                                I am a massive gamer and used to play non-stop. However, I have recently realized the importance of my future. 
                                I am now fully committed to continually practicing, developing my skills, and learning everything I can to grow.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold tracking-tight text-white/90">
                            Skills & Tools
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript'  , 'HTML'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </main>
                
                <Footer />
            </div>
        </div>
    );
}