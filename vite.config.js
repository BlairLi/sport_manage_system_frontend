import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vercel()],
  vercel: {
    // optional configuration options, see "Advanced usage" below for details
  },
  // server: {
  //   host: '0.0.0.0', // Specify host
  //   port: 5173, // Specify port
  //   strictPort: true, // Fail if the port is already in use
  //   open: true, // Open the browser when the server starts
  // },
})
