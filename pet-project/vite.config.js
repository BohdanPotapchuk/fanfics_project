import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import sass from "sass";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  css: {
    preprocessorOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, "node_modules")],
      },
    },
  },
  resolve: {
    alias: {
      "react-bootstrap": path.resolve(
        __dirname,
        "node_modules/react-bootstrap"
      ),
    },
  },
});
