//Import @Entity decorator and others
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

//Import entities for reational database
import { Comment } from '../comments/comment.entity';
import { List } from '../lists/lists.entity';

//Define entity to recognize type and export it
@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  mediaId: number;

  @Column({ nullable: false })
  mediaType: 'serie' | 'movie';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Comment, (comment) => comment.media) //Use arrow function to map relation
  comments: Comment[];

  @OneToMany((type) => List, (list) => list.media) //Use arrow function to map relation
  lists: List[];
}
