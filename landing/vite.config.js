import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target: "http://192.168.12.21:3000",
        ws: true,
      },
      "/ServiciosRest": {
        target: "http://192.168.12.21:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ServiciosRest/, ""),
      },
    },
  },
});
