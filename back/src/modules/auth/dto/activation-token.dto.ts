import { IsNotEmpty, IsUUID } from 'class-validator';

export class ActivationTokenDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  token: string;
}
