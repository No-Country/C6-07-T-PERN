//Import from libraries
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'; //Import error handlers or other NestJS state reponse like @NotFoundException"
import { InjectRepository } from '@nestjs/typeorm';
import {
  // ConnectionNotFoundError,
  // EntityNotFoundError,
  Repository,
} from 'typeorm';
import { Media } from '../media/media.entity';
import { User } from '../users/users.entity';
//Import local files
import { Comment } from './comment.entity'; //Import entity

//Create functions that must be called by methods
@Injectable()
export class CommentsService {
  //Create constructor for use a repository to connect information to DB
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  // async getComments(): Promise<Comment[]> {
  //   console.log(await this.commentRepository.find({ relations: ['user'] }))
  //   return await this.commentRepository.find({ relations: ['user'] });
  // }

  async getCommentsByMedia(
    mediaType: 'serie' | 'movie',
    mediaId: number,
  ): Promise<Comment[]> {
    const comments: Comment[] = await this.commentRepository.find({
      relations: ['user', 'media'],
      where: { media: { mediaId, mediaType } },
      select: {
        id: true,
        message: true,
        updatedAt: true,
        user: { id: true, username: true },
      },
    });
    if (!comments.length) throw new NotFoundException();
    return comments;
  }

  async getCommentById(id: string): Promise<Comment> {
    try {
      const comment: Comment = await this.commentRepository.findOne({
        relations: ['user', 'media'],
        where: {
          id: id,
        },
        select: {
          id: true,
          message: true,
          updatedAt: true,
          user: { id: true, username: true },
        },
      });
      if (!comment) throw new NotFoundException();
      return comment;
    } catch {
      throw new NotFoundException();
    }
  }

  async addNewComment(
    message: string,
    mediaType: 'serie' | 'movie',
    mediaId: number,
    user: User,
  ): Promise<Comment> {
    try {
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
      const newComment: Comment = this.commentRepository.create({
        message,
        media,
        user: user || null,
      });
      return this.commentRepository.save(newComment);
    } catch {
      throw new BadRequestException();
    }
  }

  async updateComment(
    id: string,
    message: string,
    user: User,
  ): Promise<Comment> {
    const targetComment: Comment = await this.getCommentById(id);
    if (!targetComment) throw new NotFoundException();
    if (targetComment.user.id == user.id) {
      targetComment.message = message;
      return this.commentRepository.save(targetComment);
    }
    throw new UnauthorizedException();
  }

  async deleteComment(id: string, user: User): Promise<Comment> {
    const commentToDelete: Comment = await this.getCommentById(id);
    if (!commentToDelete) throw new NotFoundException();
    if (commentToDelete.user && commentToDelete.user.id == user.id) {
      await this.commentRepository.remove(commentToDelete);
      return commentToDelete;
    }
    throw new UnauthorizedException();
  }

  // async deleteAllComments(): Promise<string> {
  //   const comments: Comment[] = await this.commentRepository.find();
  //   const repository = this.commentRepository;
  //   console.log(this);
  //   function handleDeletePromises(comments, index = comments.length - 1) {
  //     const comment = comments[index];
  //     repository
  //       .remove(comment)
  //       .then(() =>
  //         comments[--index]
  //           ? handleDeletePromises(comments, index)
  //           : console.log('done'),
  //       );
  //   }
  //   handleDeletePromises(comments);
  //   return 'All comments deleted';
  // }
}
