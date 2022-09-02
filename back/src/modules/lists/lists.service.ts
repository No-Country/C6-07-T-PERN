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
    list: 'watched' | 'my_list',
  ): Promise<any> {
    //Find or create media
    let media: Media = await this.mediaRepository.findOne({
      where: { mediaId, mediaType },
      select: { id: true, mediaId: true, mediaType: true },
    });
    if (!media) {
      const newMedia: Media = this.mediaRepository.create({
        mediaId: mediaId,
        mediaType: mediaType,
      });
      media = newMedia;
    }
    //Find and update or create List
    let lister: List = await this.listRepository.findOne({
      relations: ['user', 'media'],
      where: { user: { id: user.id }, media: { mediaId, mediaType } },
      select: {
        id: true,
        updatedAt: true,
        user: { id: true, username: true },
        media: { id: true, mediaId: true, mediaType: true },
      },
    });
    if (!lister) {
      const newLister: List = this.listRepository.create({
        user,
        media: { id: media.id, mediaId, mediaType },
        [list]: onList,
      });
      await this.listRepository.save(newLister);
      return await this.getListsByMediaIdAndUser(mediaType, mediaId, user);
    }
    lister[list] = onList;
    // return lister;
    await this.listRepository.save(lister);
    return await this.getListsByMediaIdAndUser(mediaType, mediaId, user);
  }

  async getListsByMediaIdAndUser(
    mediaType: 'serie' | 'movie',
    mediaId: number,
    user: User,
  ): Promise<List> {
    if (!user) throw new UnauthorizedException();
    let list: List = await this.listRepository.findOne({
      relations: ['media', 'user'],
      where: { media: { mediaId, mediaType }, user: { id: user.id } },
      select: {
        id: true,
        watched: true,
        my_list: true,
        user: { id: true, username: true },
        media: { mediaId: true, mediaType: true },
      },
    });
    if (!list) throw new NotFoundException();
    return list;
  }

  async getListsByUser(
    list: 'watched' | 'my_list',
    user: User,
  ): Promise<List[]> {
    if (!user) throw new UnauthorizedException();
    let mediaList: List[] = await this.listRepository.find({
      relations: ['media', 'user'],
      where: { [list]: true, user: { id: user.id } },
      select: {
        id: true,
        [list]: true,
        user: { id: true, username: true },
        media: { mediaId: true, mediaType: true },
      },
    });
    if (!mediaList) throw new NotFoundException();
    return mediaList;
  }
}
