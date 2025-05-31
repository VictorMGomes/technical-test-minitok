import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from '@/backend/modules/users/users.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from './users.dto';
import { apiDocGenerator } from '@/backend/common/config/swagger.config';
import { ZodValidationPipe } from '@/backend/common/pipes/zod-validation.pipe';
import { UserCreate, UserUpdate } from '@/backend/modules/users/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @apiDocGenerator()
  findAll(): Promise<UserResponseDto[] | null> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @apiDocGenerator()
  findOne(@Param('id') id: string): Promise<UserResponseDto | null> {
    return this.usersService.findOne(id);
  }

  @Post()
  @apiDocGenerator()
  createOne(
    @Body(new ZodValidationPipe(UserCreate)) createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @apiDocGenerator()
  updateOne(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UserUpdate)) data: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  @apiDocGenerator()
  deleteOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.delete(id);
  }
}
