
import CinematicHero from '@/components/CinematicHero';
import EventGrid from '@/components/EventGrid';
import QRScanner from '@/components/QRScanner';
import HorizontalGallery from '@/components/HorizontalGallery';
import FeatureExplosion from '@/components/FeatureExplosion';
import ParallaxEnvironment from '@/components/ParallaxEnvironment';
import BookingTimeline from '@/components/BookingTimeline';
import CustomCursor from '@/components/CustomCursor';
import { Menu, Search, User } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative">
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
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Events</a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Venues</a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">VIP</a>
            <a href="#" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Support</a>
          </div>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <User size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <CinematicHero />
      <EventGrid />
      <QRScanner />
      <HorizontalGallery />
      <FeatureExplosion />
      <ParallaxEnvironment />
      <BookingTimeline />

      {/* Footer */}
      <footer className="py-24 bg-background border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-headline text-3xl font-bold mb-6 tracking-tighter">BLACK TICKER</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              Redefining the standard of event access through cutting-edge technology and unparalleled user experience.
            </p>
            <div className="flex gap-4">
               {['TW', 'IG', 'FB', 'YT'].map(social => (
                 <a key={social} href="#" className="h-10 w-10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all font-bold text-xs">
                   {social}
                 </a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
           <p>© 2024 BLACK TICKER TECHNOLOGY INC. ALL RIGHTS RESERVED.</p>
           <p>DESIGNED FOR THE EXTRAORDINARY.</p>
        </div>
      </footer>
    </main>
  );
}
