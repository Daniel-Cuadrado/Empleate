# Frontend Developer Showcase

Un portafolio profesional construido con React y buenas prácticas modernas, diseñado para demostrar capacidades técnicas en arquitectura frontend, gestión de estado y diseño UI/UX.

## Tabla de Contenidos
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Decisiones de Diseño](#decisiones-de-diseño)

## Tecnologías

- **Core**: React 18, React Router v6
- **Build Tool**: Vite (para HMR rápido y build optimizado)
- **Styling**: Tailwind CSS (Utility-first framework)
- **Iconography**: Lucide React (Iconos SVG ligeros)
- **Linting**: ESLint + Standard Rules

## Estructura del Proyecto

La arquitectura sigue una organización por capas funcionales para facilitar la escalabilidad:

```
src/
├── components/   # UI reutilizable (Navbar, Footer, Cards)
├── pages/        # Vistas principales (Rutas)
├── hooks/        # Lógica de negocio extraída (Custom Hooks)
├── services/     # Capa de comunicación con APIs
├── styles/       # Configuración global de estilos
└── App.jsx       # Componente raíz y Routing
```

## Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone <repo-url>
   cd frontend-showcase
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Correr servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Características Clave (Showcase)

### 1. Gestión de Estado (Deep Dive)
En la sección `/deep-dive`, se implementa una demostración técnica de gestión de estado combinando `useState` para estado local y `Context API` para estado global (Tema UI). Simula operaciones[...]

### 2. Custom Hooks
El hook `useAsync` encapsula la lógica repetitiva de manejo de carga y errores en peticiones HTTP, manteniendo los componentes limpios (Clean Code).

### 3. Responsive Design
Uso extensivo de breakpoints de Tailwind (`md:`, `lg:`) para asegurar una experiencia fluida desde móviles hasta monitores de escritorio.

---

<img width="300" alt="ArPCvB" src="https://github.com/user-attachments/assets/cebcfdb8-f165-4dba-a7ed-cb1463cfe350" />
