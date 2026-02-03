import React from 'react';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-3/4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Daniel Cuadrado Masero <br/>
              <span className="text-blue-200 text-2xl sm:text-3xl md:text-5xl">Desarrollador Full Stack & DAM</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-blue-100 max-w-2xl">
              Transformando requerimientos complejos en soluciones robustas. Técnico Superior en DAM por el Instituto Nebrija con pasión por la arquitectura de software.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center">
                Ver Proyectos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Stack Tecnológico</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend & Core</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Java & Spring Boot</li>
                <li>SQL / Bases de Datos</li>
                <li>Node.js</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend & Web</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Angular (Framework Principal)</li>
                <li>React.js (Librería UI)</li>
                <li>HTML5 / CSS3 / Tailwind</li>
                <li>Diseño Responsive</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud & Otros</h3>
              <ul className="text-gray-600 space-y-2">
                <li>AWS (Cloud Services)</li>
                <li>Unity (C# Development)</li>
                <li>Inglés B2 (Cambridge)</li>
                <li>Resolución de Problemas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
