// Simulation of a backend API
const DELAY = 800;

export const api = {
  get: (endpoint) => new Promise((resolve, reject) => {
    console.log(`Fetching ${endpoint}...`);
    setTimeout(() => {
      // Mock data based on endpoint
      if (endpoint === '/todos') {
        resolve([
          { id: 1, text: 'Review Pull Request #42', completed: true },
          { id: 2, text: 'Refactor Auth Context', completed: false },
          { id: 3, text: 'Setup CI/CD Pipeline', completed: false },
        ]);
      } else {
        resolve({ message: 'Ok' });
      }
    }, DELAY);
  }),

  post: (endpoint, data) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Date.now(), ...data });
    }, 500);
  }),

  patch: (endpoint, data) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, ...data });
    }, 300);
  })
};
