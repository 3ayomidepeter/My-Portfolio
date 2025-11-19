import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use VITE_BASE env to override base (helpful: GH Pages needs a repo subpath).
  // Example: `cross-env VITE_BASE=/My-Portfolio/ npm run build`
  base: process.env.VITE_BASE || "/",
});
