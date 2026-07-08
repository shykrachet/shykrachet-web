import { Footer, Header } from "@/components/headerfooter";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased">
            <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-24">

                <Header />
                <main className="p-8">
                    <h1 className="text-2xl font-bold">Soon</h1>
            
                </main>
                <Footer />
            </div>
        </div>
    );
}