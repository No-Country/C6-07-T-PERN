import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; //Imports TyperOrmModule

//Imports from local files
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //Use for feauture to connect the entity
})
export class UsersModule {}
