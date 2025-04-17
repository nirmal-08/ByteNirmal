import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ByteNirmal/', // 👈 Add this line (use your GitHub repo name here)
});
