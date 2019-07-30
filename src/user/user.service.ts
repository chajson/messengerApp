import { Injectable } from '@nestjs/common';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
    export class UserService {
        constructor(
            @InjectRepository(User)
            private userRepository: Repository<User>,
        ) { }

        async findAll(): Promise<User[]> {
            return await this.userRepository.find();
        }

        async  create(user: User): Promise<User> {
            return await this.userRepository.save(user);
        }
    }
