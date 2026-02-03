import React from 'react';
import { Server, Layout, Database, Shield, GitBranch, Terminal } from 'lucide-react';

/* 
  DEEP DIVE: CRM EMPRESARIAL FULL STACK
  
  Esta sección analiza en profundidad la arquitectura del proyecto principal,
  destacando decisiones técnicas de backend y frontend.
*/

const DeepDive = () => {
  return (
    <div className="transition-colors duration-300 min-h-[calc(100vh-64px)] bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wide">Proyecto Estrella</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wide">Angular + Spring Boot</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CRM Empresarial Full Stack</h1>
            <p className="text-xl max-w-2xl text-gray-600">
              Una solución integral para la gestión de clientes, diseñada con una arquitectura escalable y desacoplada que prioriza la seguridad y la experiencia de usuario.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Columna Backend */}
          <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                <Server className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold">Arquitectura Backend</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Spring Boot Core</h3>
                <p className="leading-relaxed text-gray-600">
                  El corazón del sistema es una API RESTful construida con Java 17 y Spring Boot. Se implementó una arquitectura en capas (Controller, Service, Repository) para asegurar la separación de responsabilidades y facilitar el testing unitario con JUnit.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Seguridad & Datos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-2 mt-0.5 text-green-500 shrink-0" />
                    <span><strong>Spring Security + JWT:</strong> Autenticación stateless para proteger endpoints y gestionar roles de usuario (ADMIN, USER).</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 mr-2 mt-0.5 text-green-500 shrink-0" />
                    <span><strong>MySQL & JPA/Hibernate:</strong> Modelado de datos relacional complejo con optimización de consultas SQL nativas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna Frontend */}
          <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 text-red-700 rounded-xl">
                <Layout className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold">Arquitectura Frontend</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">Ecosistema Angular</h3>
                <p className="leading-relaxed text-gray-600">
                  La interfaz de usuario es una Single Page Application (SPA) modular. Se utilizó la potencia de TypeScript para un tipado estricto que reduce errores en tiempo de ejecución.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">Características Clave</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <GitBranch className="h-5 w-5 mr-2 mt-0.5 text-red-500 shrink-0" />
                    <span><strong>Gestión de Estado (Observables):</strong> Uso intensivo de RxJS para manejar flujos de datos asíncronos y comunicación entre componentes.</span>
                  </li>
                  <li className="flex items-start">
                    <Terminal className="h-5 w-5 mr-2 mt-0.5 text-red-500 shrink-0" />
                    <span><strong>Componentes Reutilizables:</strong> Diseño atómico de componentes UI para mantener consistencia visual en todo el dashboard.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Retos y Soluciones */}
        <div className="p-8 rounded-2xl mb-12 bg-gray-50 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Retos Técnicos Superados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-lg mb-2">CORS & Seguridad</h4>
              <p className="text-sm text-gray-600">
                Configuración precisa de políticas CORS en Spring Boot para permitir peticiones seguras desde el cliente Angular, manteniendo la integridad del API.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-lg mb-2">Sincronización de Datos</h4>
              <p className="text-sm text-gray-600">
                Implementación de interceptores HTTP en Angular para inyectar tokens JWT automáticamente y manejar errores de sesión de forma global.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h4 className="font-bold text-lg mb-2">Despliegue Full Stack</h4>
              <p className="text-sm text-gray-600">
                Orquestación de ambos entornos (build de prod de Angular servida estáticamente o independiente) para un despliegue eficiente en la nube.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeepDive;
