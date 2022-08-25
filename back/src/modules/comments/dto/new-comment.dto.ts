//Install class validartor to validate classes and types
//Using npm i class-validator
import { IsInt, IsString } from 'class-validator';

export class NewCommentDto {
  @IsString()
  readonly message: string;
  @IsString()
  readonly   type: 'serie' | 'movie';
  @IsInt()
  readonly mediaId: number;
  @IsString()
  readonly user: string;
}
