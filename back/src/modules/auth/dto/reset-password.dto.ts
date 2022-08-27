import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  newPassword: string;
}

export class ResetPasswordTokenDto {
  @IsNotEmpty()
  @IsUUID()
  token: string;
}
