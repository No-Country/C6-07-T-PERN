import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Instal TypeOrm, Postgres and NestJSTypeOrm with npm i typeorm pg @nestjs/typeorm
// Import TypeOrmModule
import { TypeOrmModule } from '@nestjs/typeorm';
// Import new modules
import { CommentsModule } from './modules/comments/comments.module';
import { Comment } from './modules/comments/comment.entity';

@Module({
  imports: [
    CommentsModule,
    //Import TypeOrm into the module and connect the DB with forRoot method
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'motty.db.elephantsql.com',
      username: 'wstwiqte',
      password: 'mo0Uts6K4DKz2eC_nHT7QYoYKPque0lH',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ], //Connect new modules
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
