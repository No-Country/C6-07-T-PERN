import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaController } from './media.controller';
import { Media } from './media.entity';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media])], //Use for feauture to connect the entity
  providers: [MediaService],
  controllers: [MediaController],
})
export class MediaModule {}
