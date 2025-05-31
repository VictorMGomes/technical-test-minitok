import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from '@/backend/common/modules/prisma/prisma.service';
import { SystemModule } from '@/backend/common/modules/system/system.module';

@Module({
  imports: [UsersModule, SystemModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
