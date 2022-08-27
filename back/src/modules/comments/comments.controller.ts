//Methods imported from libraries
import { Controller, UseGuards } from '@nestjs/common'; //Import controller object
import { Query, Param, Body, HttpCode, HttpStatus } from '@nestjs/common'; //Import data from request and for reponses
import { Get, Post, Put, Delete } from '@nestjs/common'; //Import methods
import { GetUser } from '../auth/get-user.decorator';
import { OptionalJwtAuthGuard } from '../auth/optional-authentication.guard';
import { User } from '../users/users.entity';
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

  // @Get()
  // async getComments(): Promise<Comment[]> {
  //   return await this.commentService.getComments();
  // }

  // @Get(':id/:detail')
  // getCommentDetail(@Param('id') id: string, @Param('detail') detail: string) {
  //   return `Your comment id is ${id} with details ${detail}`;
  // }

  @Post()
  @UseGuards(OptionalJwtAuthGuard)
  //   Setup the code response and the status
  //   @HttpCode(HttpStatus.BAD_REQUEST)
  async createComment(
    @Body() body: NewCommentDto,
    @GetUser() loggedUser: User,
  ): Promise<string> {
    const { message, type, mediaId } = body;
    await this.commentService.addNewComment(message, type, mediaId, loggedUser);
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
    // if (id == 'all') return await this.commentService.deleteAllComments();
    await this.commentService.deleteComment(id);
    return 'Comment has been deleted';
  }
}
