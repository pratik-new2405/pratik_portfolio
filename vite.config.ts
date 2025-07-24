import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pratik_portfolio/', // ← your GitHub repo name
  plugins: [react()],
});
