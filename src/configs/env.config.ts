import { z } from "zod";

const envSchema = z.object({
  MODE: z.string(),
  VITE_BACKEND_API_BASE_URL: z.string(),
});

const env = envSchema.parse(import.meta.env);

export const envConfig = {
  mode: env.MODE,
  backendApiBaseUrl: env.VITE_BACKEND_API_BASE_URL,
} as const;
