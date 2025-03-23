import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Video } from "./Video";
import { Subject } from "./Subject";

@Entity("rooms") // taqbela
export class Room {
  @PrimaryGeneratedColumn() // coluna
  id: number;

  @Column({ type: "text" }) // coluna
  name: string;

  @Column({ type: "text", nullable: true }) // coluna
  description: string;

  @OneToMany(() => Video, (video) => video.room) // coluna com relação um para muitos
  videos: Video[];

  @ManyToMany(() => Subject, (subject) => subject.rooms) // coluna com relação muitos para muitos
  subjects: Subject[];
}
