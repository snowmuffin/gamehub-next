import { z } from "zod";

// Define required and optional environment variables
export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  NEXT_PUBLIC_FRONTEND_URL: z.string().url().optional(),
  NEXT_PUBLIC_FRONTEND_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
  NEXT_PUBLIC_API_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_STEAM_AUTH_URL: z.string().url().optional(),
  NEXT_PUBLIC_ALLOWED_ORIGINS: z.string().optional()
});

export type Env = z.infer<typeof EnvSchema>;

let parsed: Env | null = null;

export const getEnv = (): Env => {
  if (parsed) return parsed;
  const result = EnvSchema.safeParse(process.env);
  if (!result.success) {
    // Aggregate readable errors
    const issues = result.error.issues
      .map(
        (i: { path: (string | number)[]; message: string }) => `${i.path.join(".")}: ${i.message}`
      )
      .join("; ");
    console.warn(`Environment validation failed: ${issues}`);
    // Fall back to partial with defaults to avoid hard crash in runtime; CI should catch this
  }
  parsed = result.success ? result.data : EnvSchema.parse({});
  return parsed;
};
