import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from '../media/media.entity';
import { User } from '../users/users.entity';
import { List } from './lists.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List) private readonly listRepository: Repository<List>,
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async setMediaList(
    mediaType: 'serie' | 'movie',
    mediaId: number,
    user: User,
    onList: boolean,
    list: 'weatched' | 'myList',
  ): Promise<List> {
    //Find or create media
    let media: Media = await this.mediaRepository.findOne({
      where: { mediaId, mediaType },
    });
    if (!media) {
      const newMedia: Media = this.mediaRepository.create({
        mediaId: mediaId,
        mediaType: mediaType,
      });
      media = newMedia;
    }
    //Find and update or create List
    let lister: List = await this.listRepository.preload({
      user,
      media,
      [list]: onList,
    });
    if (!lister) {
      const newLister: List = this.listRepository.create({
        user,
        media,
        [list]: onList,
      });
      lister = newLister;
      return this.listRepository.save(lister);
    }
  }

  async getListsByMediaIdAndUser(
    mediaType: 'serie' | 'movie',
    mediaId: number,
    user: User,
  ): Promise<List> {
    if (!user) throw new UnauthorizedException();
    let media: Media = await this.mediaRepository.findOne({
      where: { mediaId, mediaType },
    });
    if (!media) throw new NotFoundException();
    let list: List = await this.listRepository.findOne({
      relations: ['media', 'user'],
      where: { media, user },
    });
    return list;
  }
}
