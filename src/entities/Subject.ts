import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./Room";

@Entity("subjects")
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => Room, (room) => room.subjects)
  rooms: Room[];
}
