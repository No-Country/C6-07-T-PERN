//Import @Entity decorator and others
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

//Import entities for reational database
import { Comment } from '../comments/comment.entity';

//Define entity to recognize type and export it
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @Column({ type: 'uuid', unique: true })
  activationToken: string;

  @Column({ type: 'uuid', unique: true, nullable: true })
  resetPasswordToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Comment, (comment) => comment.user) //Use arrow function to map relation
  comments: Comment[];
}
