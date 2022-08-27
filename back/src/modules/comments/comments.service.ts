//Import from libraries
import { Injectable, NotFoundException, Options } from '@nestjs/common'; //Import error handlers or other NestJS state reponse like @NotFoundException"
import { InjectRepository } from '@nestjs/typeorm';
import {
  // ConnectionNotFoundError,
  // EntityNotFoundError,
  Repository,
} from 'typeorm';
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
  ) {}

  // async getComments(): Promise<Comment[]> {
  //   console.log(await this.commentRepository.find({ relations: ['user'] }))
  //   return await this.commentRepository.find({ relations: ['user'] });
  // }

  async getCommentsByMedia(
    type: 'serie' | 'movie',
    mediaId: number,
  ): Promise<Comment[]> {
    const comments: Comment[] = await this.commentRepository.find({
      relations: ['user'],
      where: { type, mediaId },
    });
    if (!comments.length) throw new NotFoundException();
    return comments;
  }

  async getCommentById(id: string): Promise<Comment> {
    try {
      const comment: Comment = await this.commentRepository.findOneBy({
        id: id,
      });
      if (!comment) throw new NotFoundException();
      return comment;
    } catch {
      throw new NotFoundException();
    }
  }

  async addNewComment(
    message: string,
    type: 'serie' | 'movie',
    mediaId: number,
    user: User,
  ): Promise<Comment> {
    const newComment: Comment = this.commentRepository.create({
      message,
      type,
      mediaId,
      user: user || null,
    });
    return this.commentRepository.save(newComment);
  }

  async updateComment(id: string, message: string): Promise<Comment> {
    const targetComment: Comment = await this.commentRepository.preload({
      id,
      message,
    });
    if (!targetComment) throw new NotFoundException();
    return targetComment;
  }

  async deleteComment(id: string): Promise<Comment> {
    const commentToDelete: Comment = await this.getCommentById(id);
    if (!commentToDelete) throw new NotFoundException();
    await this.commentRepository.remove(commentToDelete);
    return commentToDelete;
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
