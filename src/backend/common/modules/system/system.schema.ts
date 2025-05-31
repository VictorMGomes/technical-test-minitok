import { z } from 'zod';

export const packageJsonSchema = z.object({
  name: z.string(),
  version: z
    .string()
    .regex(
      /^\d+\.\d+\.\d+$/,
      'Version must follow semantic versioning (x.y.z)',
    ),
  description: z.string(),
  author: z.object({
    name: z.string(),
    email: z.string().email(),
    url: z.string().url(),
  }),
});

export type PackageJsonType = z.infer<typeof packageJsonSchema>;
