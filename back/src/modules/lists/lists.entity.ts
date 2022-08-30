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
  import { Media } from '../media/media.entity';
  
  //Import entities for reational database
  import { User } from '../users/users.entity';
  
  //Define entity to recognize type and export it
  @Entity()
  export class List {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false })
    watched: boolean;

    @Column({ nullable: false })
    my_list: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne((type) => Media, (media) => media.lists, { cascade: true }) //Use arrow function to map relation
    //Use cascade to relation Put, Delete and other methods
    @JoinColumn() //Join column to create a relational column
    media: Media;
  
    @ManyToOne((type) => User, (user) => user.lists, { cascade: true }) //Use arrow function to map relation
    //Use cascade to relation Put, Delete and other methods
    @JoinColumn({ name: 'user_id' }) //Join column to create a relational column
    user: User;
  }