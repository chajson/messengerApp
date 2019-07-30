import { Module } from '@nestjs/common'; // also imported in the app.module.ts
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([User]), // makes our entity in database
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class ContactsModule {}
