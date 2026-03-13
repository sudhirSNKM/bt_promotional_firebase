
import CinematicHero from '@/components/CinematicHero';
import EventGrid from '@/components/EventGrid';
import QRScanner from '@/components/QRScanner';
import HorizontalGallery from '@/components/HorizontalGallery';
import FeatureExplosion from '@/components/FeatureExplosion';
import ParallaxEnvironment from '@/components/ParallaxEnvironment';
import BookingTimeline from '@/components/BookingTimeline';
import ConfettiSuccess from '@/components/ConfettiSuccess';
import CustomCursor from '@/components/CustomCursor';
import { Menu, Search, User } from 'lucide-react';

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

      {/* Footer */}
      <footer className="py-32 bg-background border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-headline text-4xl font-bold mb-8 tracking-tighter">BLACK TICKER</h2>
            <p className="text-gray-400 max-w-sm mb-10 leading-relaxed">
              Redefining the standard of event access through cutting-edge technology and unparalleled cinematic user experiences.
            </p>
            <div className="flex gap-4">
               {['TW', 'IG', 'FB', 'YT'].map(social => (
                 <a key={social} href="#" className="h-12 w-12 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all font-bold text-xs">
                   {social}
                 </a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-primary">Platform</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Elite Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Venues</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VIP Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Tech</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-[10px] uppercase tracking-[0.3em] text-primary">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
           <p>© 2024 BLACK TICKER TECHNOLOGY INC. ALL RIGHTS RESERVED.</p>
           <p>ENGINEERED FOR THE EXTRAORDINARY.</p>
        </div>
      </footer>
    </main>
  );
}
