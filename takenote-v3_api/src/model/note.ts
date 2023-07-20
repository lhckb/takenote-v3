import { Length } from "class-validator";
import { Entity, OneToOne, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";
import User from "./person";

@Entity()
export default class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  user: User;

  @Column({ nullable: false })
  @Length(1, 50)
  title: string;

  @Column({ nullable: false })
  @Length(1, 1000)
  body: string;

  @Column({ nullable: false })
  created_at: Timestamp;

  @Column({ nullable: false })
  updated_at: Timestamp;
}