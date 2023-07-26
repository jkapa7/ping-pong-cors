import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //DE ESTA MANEJA PUEDO DEFINIR EL PUERTO DEL CLIENTE CON VITE
  server: {
    port: 3000,
  },
});
