import React from 'react';
import { Mail, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aspiring App Developer</h1>
          <p className="text-xl mb-8">Currently pursuing Engineering at Atharva College of Engineering</p>
          <div className="flex gap-4">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://github.com/yourusername" className="flex items-center gap-2 bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=387"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;