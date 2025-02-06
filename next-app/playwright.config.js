import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" }); // ✅ Load test environment variables

export default defineConfig({
  use: {
    baseURL: "http://localhost:3000", // Ensure Next.js server is running
  },
});
