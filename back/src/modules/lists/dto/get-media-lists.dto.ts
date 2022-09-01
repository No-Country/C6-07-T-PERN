import { IsNumber, IsString } from 'class-validator';

export class GetMediaListsDto {
  @IsString()
  readonly mediaType: 'serie' | 'movie';

  @IsNumber()
  readonly mediaId: number;
}
