//Methods imported from libraries
import { Controller } from '@nestjs/common'; //Import controller object
import { Query, Param, Body, HttpCode, HttpStatus } from '@nestjs/common'; //Import data from request and for reponses
import { Get, Post, Put, Delete } from '@nestjs/common'; //Import methods
//Methods and varaibles imported from local files
import { Comment } from './comment.entity'; //Import entity
import { CommentsService } from './comments.service'; //Import services
import { NewCommentDto, UpdateCommentDto } from './dto';

@Controller('comments')
export class CommentsController {
  //Create constructor and include services to call the privately
  constructor(private readonly commentService: CommentsService) {}

  //Define methods to call from API

  @Get(':id')
  async getComment(@Param('id') id: string): Promise<Comment> {
    return await this.commentService.getCommentById(id);
  }

  //Get with query
  @Get()
  async getCommentsByQuery(@Query() query): Promise<Comment[]> {
    const { mediaType, mediaId } = query;
    return await this.commentService.getCommentsByMedia(mediaType, mediaId);
  }

  @Get()
  async getComments(): Promise<Comment[]> {
    return await this.commentService.getComments();
  }

  // @Get(':id/:detail')
  // getCommentDetail(@Param('id') id: string, @Param('detail') detail: string) {
  //   return `Your comment id is ${id} with details ${detail}`;
  // }

  @Post()
  //   Setup the code response and the status
  //   @HttpCode(HttpStatus.BAD_REQUEST)
  async createComment(@Body() body: NewCommentDto): Promise<string> {
    const { message, type, mediaId, user } = body;
    await this.commentService.addNewComment(message, type, mediaId, user);
    return 'New comment has been set.';
  }

  @Put()
  async updateComment(@Body() body: UpdateCommentDto): Promise<string> {
    const { id, message } = body;
    await this.commentService.updateComment(id, message);
    return 'The comment has been updated';
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string): Promise<string> {
    await this.commentService.deleteComment(id);
    return 'Comment has been deleted';
  }
}
