import { IsNumber, IsObject, IsString } from 'class-validator';
import { User } from 'src/modules/users/users.entity';

export default class GetMediaListsDto {
  @IsString()
  readonly mediaType: 'serie' | 'movie';

  @IsNumber()
  readonly mediaId: number;
}
