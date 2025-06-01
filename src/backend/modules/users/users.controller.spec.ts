import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from './users.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: jest.Mocked<UsersService>;

  const mockUser: UserResponseDto = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  };

  beforeEach(async () => {
    const mockUsersService: Partial<jest.Mocked<UsersService>> = {
      findAll: jest.fn().mockResolvedValue([mockUser]),
      findOne: jest.fn().mockResolvedValue(mockUser),
      create: jest.fn().mockResolvedValue(mockUser),
      update: jest.fn().mockResolvedValue(mockUser),
      delete: jest.fn().mockResolvedValue(mockUser),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get(UsersService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should return all users', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockUser]);
    expect(usersService.findAll.mock.calls.length).toBeGreaterThan(0);
  });

  it('should return one user by id', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual(mockUser);
    expect(usersService.findOne.mock.calls[0][0]).toBe('1');
  });

  it('should create a user', async () => {
    const createDto: CreateUserDto = {
      name: 'New User',
      email: 'new@example.com',
    };

    const result = await controller.createOne(createDto);
    expect(result).toEqual(mockUser);
    expect(usersService.create.mock.calls[0][0]).toEqual(createDto);
  });

  it('should update a user', async () => {
    const updateDto: UpdateUserDto = { name: 'Updated Name' };

    const result = await controller.updateOne('1', updateDto);
    expect(result).toEqual(mockUser);
    expect(usersService.update.mock.calls[0][0]).toBe('1');
    expect(usersService.update.mock.calls[0][1]).toEqual(updateDto);
  });

  it('should delete a user', async () => {
    const result = await controller.deleteOne('1');
    expect(result).toEqual(mockUser);
    expect(usersService.delete.mock.calls[0][0]).toBe('1');
  });
});
