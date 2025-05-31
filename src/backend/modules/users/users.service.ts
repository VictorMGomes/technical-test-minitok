import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/backend/common/modules/prisma/prisma.service';
import {
  CreateUserDto,
  UpdateUserDto,
  FindUserDto,
  DeleteUserDto,
  UserResponseDto,
} from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserResponseDto[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: FindUserDto['id']): Promise<UserResponseDto | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: CreateUserDto): Promise<UserResponseDto> {
    return this.prisma.user.create({ data });
  }

  async update(
    id: FindUserDto['id'],
    data: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: DeleteUserDto['id']): Promise<UserResponseDto> {
    return this.prisma.user.delete({ where: { id } });
  }
}
