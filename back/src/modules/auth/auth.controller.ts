import { Body, Controller, Post, Get } from '@nestjs/common';
import { User } from '../users/users.entity';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/user-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: UserRegisterDto): Promise<string> {
    await this.authService.userRegiter(body);
    return `User ${body.username} have been registered`;
  }
}
