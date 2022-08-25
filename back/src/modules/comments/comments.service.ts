//Import from libraries
import { Injectable, NotFoundException, Options } from '@nestjs/common'; //Import error handlers or other NestJS state reponse like @NotFoundException"
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import {
  ConnectionNotFoundError,
  EntityNotFoundError,
  Repository,
} from 'typeorm';
//Import local files
import { Comment } from './comment.entity'; //Import entity
import { NewCommentDto, UpdateCommentDto } from './dto'; //Import DTO's

//Create functions that must be called by methods
@Injectable()
export class CommentsService {
  //Create constructor for use a repository to connect information to DB
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getComments(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async getCommentsByMedia(
    type: 'serie' | 'movie',
    mediaId: number,
  ): Promise<Comment[]> {
    const comments: Comment[] = await this.commentRepository.find({
      where: { type, mediaId },
    });
    if (!comments.length) throw new NotFoundException();
    return comments;
  }

  async getCommentById(id: string): Promise<Comment> {
    const comment: Comment = await this.commentRepository.findOneBy({ id: id });
    if (!comment) throw new NotFoundException();
    return comment;
  }

  async addNewComment(
    message: string,
    type: 'serie' | 'movie',
    mediaId: number,
    user: string,
  ): Promise<Comment> {
    const newComment: Comment = this.commentRepository.create({
      message,
      type,
      mediaId,
      user,
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
}
