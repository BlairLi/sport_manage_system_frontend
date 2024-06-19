import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Specify host
  //   port: 5173, // Specify port
  //   strictPort: true, // Fail if the port is already in use
  //   open: true, // Open the browser when the server starts
  // },
})
