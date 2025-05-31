import { z } from 'zod';
import { uuidEntitySchema } from '@/shared/validation/schemas/system.schema';

export const UserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});
export type UserType = z.infer<typeof UserSchema>;

export const UserWithuuidSchema = UserSchema.merge(uuidEntitySchema);
export type UserWithuuidType = z.infer<typeof UserWithuuidSchema>;

export const UserCreate = UserSchema;
export type UserCreateType = z.infer<typeof UserCreate>;

export const UserUpdate = UserWithuuidSchema.omit({
  id: true,
}).partial();
export type UserUpdateType = z.infer<typeof UserUpdate>;

export const UserDelete = UserWithuuidSchema.pick({ id: true });
export type UserDeleteType = z.infer<typeof UserDelete>;

export const UserFind = UserWithuuidSchema.pick({ id: true });
export type UserFindType = z.infer<typeof UserFind>;

export const UserResponse = UserWithuuidSchema;
export type UserResponseType = z.infer<typeof UserResponse>;
