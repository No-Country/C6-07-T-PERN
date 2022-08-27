import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  identification: string;
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
