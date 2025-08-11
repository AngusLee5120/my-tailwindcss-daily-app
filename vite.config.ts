import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        social: resolve(__dirname, "src/practice/social/youhua-3.html"),
        blog: resolve(__dirname, "src/practice/blog_view/blog-1.html"),
        qrcode: resolve(__dirname, "src/practice/qrcode/qrcode-2.html"),
      },
    },
  },
});
