import React, { createContext, useContext, useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Moon, Sun, Plus } from 'lucide-react';

/* 
  DEEP DIVE: STATE MANAGEMENT & ARCHITECTURE DEMO
  
  This section demonstrates:
  1. Advanced State Management (Context + Reducer pattern simulation)
  2. Custom Hooks (Logic separation)
  3. API Integration abstraction
  4. Optimistic UI updates
*/

// --- 1. Service Layer (Simulated API) ---
const api = {
  getTodos: () => new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, text: 'Review Pull Request #42', completed: true },
      { id: 2, text: 'Refactor Auth Context', completed: false },
      { id: 3, text: 'Setup CI/CD Pipeline', completed: false },
    ]), 800);
  }),
  addTodo: (text) => new Promise(resolve => {
    setTimeout(() => resolve({ id: Date.now(), text, completed: false }), 500);
  }),
  toggleTodo: (id) => new Promise(resolve => {
    setTimeout(() => resolve({ success: true }), 300);
  })
};

// --- 2. Context for Global Preference (Theme) ---
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// --- 3. Page Component ---
const DeepDive = () => {
  const { theme, toggleTheme } = useTheme();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Effect for initial data fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setIsSubmitting(true);
    // Optimistic Update could go here, but waiting for server for 'strict' demo
    try {
      const item = await api.addTodo(newTodo);
      setTodos([...todos, item]);
      setNewTodo('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggle = async (id) => {
    // Optimistic Update: Update UI immediately
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    
    // Fire and forget (or handle rollback in catch)
    try {
      await api.toggleTodo(id);
    } catch (e) {
      // Rollback
      setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`transition-colors duration-300 min-h-[calc(100vh-64px)] ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Deep Dive: Arquitectura CRM Full Stack</h1>
            <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
               Análisis de mi proyecto principal: CRM con Angular y Spring Boot. (Demo interactiva en React abajo)
            </p>
          </div>
          <button 
            onClick={toggleTheme}
            className={`p-3 rounded-full ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800 shadow-md'}`}
          >
            {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>

        {/* Case Study Section */}
        <div className={`mb-12 p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h2 className="text-2xl font-bold mb-4">Caso de Estudio: CRM Empresarial</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">Backend System (Spring Boot)</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Diseño de una API RESTful robusta en Java. Implementación de seguridad, gestión de transacciones JPA y conexión optimizada con Base de Datos SQL.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
                <li>Arquitectura MVC</li>
                <li>Inyección de Dependencias</li>
                <li>Gestión de Roles y Seguridad</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-500">Frontend Architecture (Angular)</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Cliente SPA reactivo. Uso de componentes modulares, servicios para la comunicación HTTP y gestión de estado para una experiencia de usuario fluida.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm opacity-80">
                <li>Component-Oriented Design</li>
                <li>Servicios y Observables (RxJS)</li>
                <li>Routing avanzado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Demo Area */}
        <div className={`rounded-xl shadow-xl overflow-hidden ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <div className="p-6 border-b border-gray-700/10">
            <h2 className="text-xl font-semibold flex items-center">
              Frontend Live Demo: React Task State
              <span className="ml-3 px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-mono">Simulación Funcional</span>
            </h2>
            <p className="text-sm mt-1 opacity-70">
              Aunque mi CRM está en Angular, esta demo demuestra mi capacidad para gestionar estado asíncrono en React (conceptos transferibles).
            </p>
          </div>

          <div className="p-6">
            <form onSubmit={handleAdd} className="flex gap-4 mb-8">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Añadir nueva tarea..."
                className={`flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              />
              <button 
                disabled={isSubmitting || !newTodo.trim()}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
                <span className="ml-2">Añadir</span>
              </button>
            </form>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                <Loader2 className="h-10 w-10 animate-spin mb-3 text-blue-500" />
                <p>Sincronizando con backend...</p>
              </div>
            ) : (
              <div className="space-y-3">
                {todos.map((todo) => (
                  <div 
                    key={todo.id}
                    onClick={() => handleToggle(todo.id)}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition-all border ${
                      isDark 
                        ? 'hover:bg-gray-700 border-gray-700' 
                        : 'hover:bg-gray-50 border-gray-100'
                    } ${todo.completed ? 'opacity-60' : ''}`}
                  >
                    <div className={`flex-shrink-0 mr-4 ${todo.completed ? 'text-green-500' : 'text-gray-400'}`}>
                      {todo.completed 
                        ? <CheckCircle2 className="h-6 w-6" /> 
                        : <div className="h-6 w-6 rounded-full border-2 border-current" />
                      }
                    </div>
                    <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>
                      {todo.text}
                    </span>
                  </div>
                ))}
                
                {todos.length === 0 && (
                  <div className="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg border-gray-300/50">
                    No hay tareas pendientes. ¡Buen trabajo!
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className={`px-6 py-4 border-t text-sm flex justify-between ${isDark ? 'bg-gray-900/50 border-gray-700/50 text-gray-400' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
            <span>Estado: {todos.filter(t => t.completed).length} completadas de {todos.length}</span>
            <span className="font-mono text-xs opacity-70">Simulated Latency: 300-800ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrapper ensuring Context availability
const DeepDiveWrapper = () => (
  <ThemeProvider>
    <DeepDive />
  </ThemeProvider>
);

export default DeepDiveWrapper;
