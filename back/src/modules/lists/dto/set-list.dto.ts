//Install class validartor to validate classes and types
//Using npm i class-validator
import { IsBoolean, IsInt, IsObject, IsString } from 'class-validator';
import { User } from 'src/modules/users/users.entity';

export class SetListDto {
  @IsString()
  readonly mediaType: 'serie' | 'movie';
  @IsInt()
  readonly mediaId: number;
  @IsBoolean()
  readonly onList: boolean;
  @IsString()
  readonly list: 'watched' | 'my_list';
}
