import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // GitHub Pages などサブパス配信でも動くように相対パスにする
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
  },
});
