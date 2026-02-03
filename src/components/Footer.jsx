import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Daniel Cuadrado</h3>
            <p className="mt-2 text-gray-400">Técnico Superior DAM | Desarrollador Frontend</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Daniel-Cuadrado" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-transform" title="Mi perfil de GitHub">
              <span className="sr-only">GitHub</span>
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/danielcuadradomasero" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-transform" title="Mi perfil de LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:dcuadradomasero@gmail.com" className="text-gray-400 hover:text-white hover:scale-110 transition-transform" title="Contáctame: dcuadradomasero@gmail.com">
              <span className="sr-only">Email</span>
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">&copy; 2026 Daniel Cuadrado Masero. All rights reserved.</p>
          <div className="mt-4 md:mt-0 bg-white p-2 rounded-lg shadow-lg">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.linkedin.com/in/danielcuadradomasero" 
              alt="QR LinkedIn Daniel Cuadrado" 
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
