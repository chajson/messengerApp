import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'messenger',
      port: 5432,
      username: 'piotrchaja',
      password: 'piotrchaja',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secretOrPrivateKey:  'secret123',
  }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {}
