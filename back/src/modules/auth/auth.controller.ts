import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Patch,
  UseGuards,
  BadRequestException,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/users.entity';
import { AuthService } from './auth.service';
import { ActivationTokenDto } from './dto/activation-token.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordRequestDto } from './dto/request-password-reset.dto';
import {
  ResetPasswordDto,
  ResetPasswordTokenDto,
} from './dto/reset-password.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { GetUser } from './get-user.decorator';
import { OptionalJwtAuthGuard } from './optional-authentication.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @UseGuards(OptionalJwtAuthGuard)
  async isLogged(
    @GetUser() loggedUser: User,
  ): Promise<{ logged: boolean }> {
    try {
      return { logged: this.authService.isLogged(loggedUser) };
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Post('/register')
  @UseGuards(OptionalJwtAuthGuard)
  async register(
    @Body() body: UserRegisterDto,
    @GetUser() loggedUser: User,
  ): Promise<string> {
    try {
      this.authService.loggedRestriction(loggedUser);
      await this.authService.userRegiter(body);
      return `User ${body.username} have been registered`;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Post('/login')
  @HttpCode(200)
  @UseGuards(OptionalJwtAuthGuard)
  async login(
    @Body() body: LoginDto,
    @GetUser() loggedUser: User,
  ): Promise<{ accessToken: string }> {
    this.authService.loggedRestriction(loggedUser);
    const authenticationToken = await this.authService.login(body);
    return authenticationToken;
  }

  @Get('/activate-user')
  async activateUser(@Query() query: ActivationTokenDto): Promise<string> {
    return (
      (await this.authService.activateUser(query)) &&
      'Account susccessfuly activated'
    );
  }

  @Patch('/reset-password-request')
  async passwordResetrequest(
    @Body() body: ResetPasswordRequestDto,
  ): Promise<string> {
    return await this.authService.resetPassowrdRequest(body);
  }

  @Patch('/reset-password')
  async passwordReset(
    @Query() query: ResetPasswordTokenDto,
    @Body() body: ResetPasswordDto,
  ): Promise<string> {
    return (
      (await this.authService.resetPassowrd(query, body)) && 'New password set'
    );
  }

  @Patch('/change-password')
  @UseGuards(AuthGuard())
  async changePassword(
    @GetUser() user: User,
    @Body() passwords: ChangePasswordDto,
  ) {
    return (
      (await this.authService.changePassword(user, passwords)) &&
      'New password set'
    );
  }
}
