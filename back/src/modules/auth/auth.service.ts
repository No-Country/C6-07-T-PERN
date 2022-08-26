import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { UserRegisterDto } from './dto/user-register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async encondePassword(password: string) {
    const salt: string = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async userRegiter(userRegisterDto: UserRegisterDto): Promise<User> {
    try {
      const hashedPassword = await this.encondePassword(
        userRegisterDto.password,
      );
      const newUser: User = this.userRepository.create({
        ...userRegisterDto,
        password: hashedPassword,
      });
      return await this.userRepository.save(newUser);
    } catch {
      throw new ConflictException();
    }
  }
}
