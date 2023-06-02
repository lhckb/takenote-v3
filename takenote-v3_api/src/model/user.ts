import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { IsEmail, Length } from "class-validator"

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  @Length(1, 100)
  username: string;
}