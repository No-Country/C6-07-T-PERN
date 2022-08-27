import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/modules/users/users.entity';
import { AuthService } from '../auth.service';
import { JwtPayload } from './jwtPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
  ) {
    super({
      secretOrKey: 'super-secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { identification } = payload;
    const user: User = await this.authService.findOneByIdentification(
      identification,
    );

    if (!user) throw new UnauthorizedException();
    if (!user.active)
      throw new UnauthorizedException(
        'This account has not been activated. Please check your email inbox and follow the instructions to activate your account.',
      );
    return user;
  }
}
