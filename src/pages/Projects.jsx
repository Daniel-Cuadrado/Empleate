import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CRM Empresarial Full Stack",
      description: "Proyecto Grupal. Sistema de gestión de relaciones con clientes robusto y escalable. Desarrollado con una arquitectura desacoplada utilizando Angular para el frontend y Spring Boot para el backend, garantizando una gestión eficiente de datos y usuarios.",
      tags: ["Angular", "Spring Boot", "Java", "SQL"],
      image: "https://placehold.co/600x400/1e40af/ffffff?text=CRM+Full+Stack",
      github: "https://github.com/MiguelFernandezMateos/CrossoverX.git"
    },
    {
      id: 2,
      title: "Simón Dice - Juego de Memoria",
      description: "Implementación clásica del juego de memoria interactivo. Enfocado en la lógica algorítmica y la manipulación del DOM para crear una experiencia de usuario fluida y reactiva.",
      tags: ["JavaScript", "HTML5", "CSS3", "Lógica"],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Simon+Dice",
      github: "#"
    },
    {
      id: 3,
      title: "Interacción Digital en Unity",
      description: "Desarrollo de experiencias interactivas y entornos 3D utilizando el motor Unity y scripting en C#. Demostración de capacidades en lógica de videojuegos y entornos inmersivos.",
      tags: ["Unity", "C#", "3D", "Interacción"],
      image: "https://placehold.co/600x400/4c1d95/ffffff?text=Unity+Experience",
      github: "#"
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Una selección de trabajos que demuestran capacidades en UI/UX, arquitectura de software y resolución de problemas complejos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-48 overflow-hidden bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.github !== "#" && (
                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors w-max"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
