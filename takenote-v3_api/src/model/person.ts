import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Timestamp } from "typeorm";
import { IsEmail, Length } from "class-validator"

@Entity()
export default class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  @Length(1, 100)
  username: string;

  @Column({ nullable: false })
  created_at: Timestamp;

  @Column({ nullable: false })
  updated_at: Timestamp;
}