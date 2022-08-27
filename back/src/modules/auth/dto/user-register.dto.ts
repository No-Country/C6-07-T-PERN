import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserRegisterDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 20)
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
