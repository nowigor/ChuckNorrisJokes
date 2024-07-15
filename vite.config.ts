import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port, na którym działa Vite
    host: '0.0.0.0', // Ustawienie hosta na 0.0.0.0 pozwala na dostęp z zewnątrz
    strictPort: true, // Opcjonalne, aby wymusić użycie tylko podanego portu
  },
});