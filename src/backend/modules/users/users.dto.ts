import { createZodDto } from 'nestjs-zod';
import {
  UserCreate,
  UserDelete,
  UserFind,
  UserUpdate,
  UserResponse,
} from './users.schema';

export class CreateUserDto extends createZodDto(UserCreate) {}
export class UpdateUserDto extends createZodDto(UserUpdate) {}
export class DeleteUserDto extends createZodDto(UserDelete) {}
export class FindUserDto extends createZodDto(UserFind) {}
export class UserResponseDto extends createZodDto(UserResponse) {}
