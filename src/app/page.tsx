
import CinematicHero from '@/components/CinematicHero';
import EventGrid from '@/components/EventGrid';
import QRScanner from '@/components/QRScanner';
import HorizontalGallery from '@/components/HorizontalGallery';
import FeatureExplosion from '@/components/FeatureExplosion';
import ParallaxEnvironment from '@/components/ParallaxEnvironment';
import BookingTimeline from '@/components/BookingTimeline';
import ConfettiSuccess from '@/components/ConfettiSuccess';
import CustomCursor from '@/components/CustomCursor';
import { Menu, Search, User, Mail, Instagram, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative bg-background">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 flex justify-between items-center bg-gradient-to-b from-background to-transparent pointer-events-none">
        <div className="flex items-center gap-12 pointer-events-auto">
          <a href="#" className="font-headline text-2xl font-bold tracking-tighter text-white flex items-center gap-2 group">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center group-hover:neon-glow transition-all">
              <span className="text-black font-black text-xs">BT</span>
            </div>
            BLACK TICKER
          </a>
          <div className="hidden lg:flex gap-10 text-[10px] font-black tracking-[0.3em] uppercase text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Events</a>
            <a href="#" className="hover:text-primary transition-colors">Venues</a>
            <a href="#" className="hover:text-primary transition-colors">VIP Pass</a>
            <a href="#" className="hover:text-primary transition-colors">Ecosystem</a>
          </div>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <User size={20} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Cinematic Scroll Flow */}
      <CinematicHero />
      <HorizontalGallery />
      <EventGrid />
      <QRScanner />
      <FeatureExplosion />
      <ParallaxEnvironment />
      <BookingTimeline />
      <ConfettiSuccess />

      {/* Spotlight Contact Section */}
      <section className="relative py-48 bg-black overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-radial-at-c from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 text-center">
          <div className="mb-12 animate-float">
            <div className="h-24 w-24 bg-primary rounded-3xl flex items-center justify-center mx-auto neon-glow">
              <span className="text-black font-black text-3xl">BT</span>
            </div>
          </div>
          <h2 className="font-headline text-6xl font-bold mb-16 tracking-tighter">CONTACT US</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {[
              { icon: Mail, label: 'Email', value: 'hello@blackticker.com' },
              { icon: Instagram, label: 'Instagram', value: '@blackticker' },
              { icon: Twitter, label: 'Twitter', value: '@blackticker_hq' }
            ].map((social, i) => (
              <a key={i} href="#" className="group flex flex-col items-center gap-4 p-8 border border-white/5 rounded-2xl glass hover:border-primary/50 transition-all">
                <social.icon size={32} className="text-gray-500 group-hover:text-primary transition-colors" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 group-hover:text-white">{social.label}</span>
                <span className="text-lg font-medium">{social.value}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Spotlight Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto mt-10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
           <p>© 2024 BLACK TICKER TECHNOLOGY INC. ALL RIGHTS RESERVED.</p>
           <p>ENGINEERED FOR THE EXTRAORDINARY.</p>
        </div>
      </footer>
    </main>
  );
}
