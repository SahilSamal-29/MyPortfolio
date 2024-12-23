import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600">© 2024 Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;