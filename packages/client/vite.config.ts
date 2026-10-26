vite.config.ts

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';               <<<====
import { defineConfig } from 'vite';
import { server } from 'typescript';

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],                    <<<<======
   server: {
      proxy: {
         '/api': 'http://localhost:8000',
      },
   },
});
