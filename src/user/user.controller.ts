import { Controller, Get, Res } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../models/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}  // njection
    @Get('users')
    index(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post('register')
    async create(@Res() res , @Body() userData: User): Promise<any> { // @Body to extract an inject the body of the post request in create()
        await this.userService.create(userData);
        console.log('user created');
        return res.render('chat');
    }
}
