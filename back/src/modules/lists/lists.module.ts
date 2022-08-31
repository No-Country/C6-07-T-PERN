import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './lists.entity';
import { Media } from '../media/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, Media])], //Use for feauture to connect the entity
  providers: [ListsService],
  controllers: [ListsController],
})
export class ListsModule {}
