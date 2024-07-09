// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import  * as  path from 'path'
// import tsconfigPaths from 'vite-tsconfig-paths';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(),  tsconfigPaths()],
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, 'src/') }],
//   },
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// });

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src', // This creates an alias for the 'src' directory
    },
  },
});
