import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  publicDir: "public",
  plugins: [react()],

  server: {
    port: 5173,
    strictPort: true,
  },
});
