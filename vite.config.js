import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Allow ngrok's dynamic hostname
    allowedHosts: ["0afc6d61cbf0.ngrok-free.app", "localhost", "127.0.0.1"],
  },
});
