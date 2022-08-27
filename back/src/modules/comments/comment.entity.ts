//Import @Entity decorator and others
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

//Import entities for reational database
import { User } from '../users/users.entity';

//Define entity to recognize type and export it
@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: false })
  message: string;
  @Column({ nullable: false })
  type: 'serie' | 'movie';
  @Column({ nullable: false })
  mediaId: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne((type) => User, (user) => user.comments, { cascade: true }) //Use arrow function to map relation
  //Use cascade to relation Put, Delete and other methods
  @JoinColumn({ name: 'user_id' }) //Join column to create a relational column
  user: User;
}
