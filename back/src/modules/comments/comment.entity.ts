//Import @Entity decorator and others
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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
  @Column({ nullable: true })
  user?: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
