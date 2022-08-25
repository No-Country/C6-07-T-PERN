//Install class validartor to validate classes and types
//Using npm i class-validator
import { IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  readonly id: string;
  @IsString()
  readonly message: string;
}
