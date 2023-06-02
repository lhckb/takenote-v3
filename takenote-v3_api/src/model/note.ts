import { Length } from "class-validator";
import { Entity, OneToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import User from "./user";

@Entity()
export default class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  user: User;

  @Column({ nullable: false })
  @Length(1, 600)
  text: string;
}