import {
  ConflictException,
  Injectable,
  MethodNotAllowedException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { UserRegisterDto } from './dto/user-register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwtPayload.interface';
import { v4 } from 'uuid';
import { ActivationTokenDto } from './dto/activation-token.dto';
import {
  ResetPasswordDto,
  ResetPasswordTokenDto,
} from './dto/reset-password.dto';
import { ResetPasswordRequestDto } from './dto/request-password-reset.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
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
        activationToken: v4(),
      });
      return await this.userRepository.save(newUser);
    } catch {
      throw new ConflictException();
    }
  }

  async findOneByIdentification(identification: string): Promise<User> {
    const user: User =
      (await this.userRepository.findOneBy({ username: identification })) ||
      (await this.userRepository.findOneBy({ email: identification }));
    return user;
  }

  async passwordCheck(
    password: string,
    passwordUser: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordUser);
  }

  async login(login: LoginDto): Promise<{ accessToken: string }> {
    const { identification, password } = login;
    const user: User = await this.findOneByIdentification(identification);

    if (user && (await this.passwordCheck(password, user.password))) {
      const payload: JwtPayload = {
        id: user.id,
        identification: user.username,
        active: user.active,
      };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    }
    throw new UnauthorizedException();
  }

  async findOneInactive(id: string, token: string): Promise<User> {
    return await this.userRepository.findOneBy({
      id,
      activationToken: token,
      active: false,
    });
  }

  async activateUser(activationToken: ActivationTokenDto): Promise<boolean> {
    const { id, token } = activationToken;
    const user: User = await this.findOneInactive(id, token);
    if (!user)
      throw new UnprocessableEntityException('Account activation failed');
    user.active = true;
    this.userRepository.save(user);
    return true;
  }

  async resetPassowrdRequest(
    resetPassowrdRequest: ResetPasswordRequestDto,
  ): Promise<string> {
    const { identification } = resetPassowrdRequest;
    const user: User = await this.findOneByIdentification(identification);
    if (!user) throw new NotFoundException();
    user.resetPasswordToken = v4();
    this.userRepository.save(user);
    return user.resetPasswordToken;
  }

  async resetPassowrd(
    resetPassowrdToken: ResetPasswordTokenDto,
    resetPassword: ResetPasswordDto,
  ): Promise<boolean> {
    const { token } = resetPassowrdToken;
    const { newPassword } = resetPassword;
    const user: User = await this.userRepository.findOneBy({
      resetPasswordToken: token,
    });
    if (!user) throw new NotFoundException();
    user.resetPasswordToken = null;
    user.password = await this.encondePassword(newPassword);
    this.userRepository.save(user);
    return true;
  }

  async changePassword(
    user: User,
    changePassword: ChangePasswordDto,
  ): Promise<boolean> {
    const { oldPassword, newPassword } = changePassword;
    if (!(await this.passwordCheck(oldPassword, user.password)))
      throw new UnauthorizedException('Old password does not match');
    user.password = await this.encondePassword(newPassword);
    this.userRepository.save(user);
    return true;
  }

  loggedRestriction(user: User): void {
    if (user) throw new MethodNotAllowedException();
  }
}
