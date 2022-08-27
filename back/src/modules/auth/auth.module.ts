// For authetication install libraties with:
// npm i @nestjs/jwt @nestjs/passport @types/passport-jwt passport passport-jwt bcrypt
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwtStrategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), //Set passportModule to specify strategy
    JwtModule.register({
      secret: 'super-secret', //Set secret using .env
      signOptions: { expiresIn: 3600 }, //Set timeout for authentication
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
