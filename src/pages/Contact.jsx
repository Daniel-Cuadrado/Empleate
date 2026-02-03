import React, { useState } from 'react';
import { Mail, Briefcase, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construir el enlace mailto
    const subject = encodeURIComponent(`Contacto desde Portfolio Web de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
    
    // Abrir cliente de correo
    window.location.href = `mailto:dcuadradomasero@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Hablemos</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            ¿Buscas un desarrollador que entienda tanto de código como de producto? Estoy disponible para nuevas oportunidades.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-blue-600 py-12 px-6 md:px-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Briefcase className="h-6 w-6 mt-1 mr-4 text-blue-200" />
                  <div>
                    <h4 className="font-semibold text-blue-100">Estado Actual</h4>
                    <p>Disponible para contratación</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mt-1 mr-4 text-blue-200" />
                  <div>
                    <h4 className="font-semibold text-blue-100">Email</h4>
                    <p>dcuadradomasero@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mt-1 mr-4 text-blue-200" />
                  <div>
                    <h4 className="font-semibold text-blue-100">Ubicación</h4>
                    <p>Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-blue-200 text-sm mb-4">
                Escanea el código QR para conectar en LinkedIn o búscame como <strong>danielcuadradomasero</strong>.
              </p>
              <div className="bg-white p-2 rounded-lg inline-block shadow-lg">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/danielcuadradomasero" 
                  alt="QR LinkedIn Daniel Cuadrado" 
                  className="w-32 h-32"
                />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="py-12 px-6 md:px-10 md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíame un mensaje</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 bg-gray-50 px-4 border"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 bg-gray-50 px-4 border"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-4 border"
                  placeholder="¿Cómo puedo ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
