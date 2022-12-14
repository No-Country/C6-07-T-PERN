import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; //Imports TyperOrmModule

//Imports from local files
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';
import { Media } from '../media/media.entity';

//Connect controllers and services to the module
@Module({
  imports: [TypeOrmModule.forFeature([Comment, Media])], //Use for feauture to connect the entity
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
