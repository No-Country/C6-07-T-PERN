//Install class validartor to validate classes and types
//Using npm i class-validator
import { IsInt, IsObject, IsString } from 'class-validator';
import { User } from 'src/modules/users/users.entity';

export class NewCommentDto {
  @IsString()
  readonly message: string;
  @IsString()
  readonly type: 'serie' | 'movie';
  @IsInt()
  readonly mediaId: number;
  // @IsObject()
  readonly user?: User;
}
