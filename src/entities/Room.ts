import {
  Column,
  Entity,
  JoinTable,
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
  @JoinTable({
    name: "room_subjet",
    joinColumn: {
      name: "room_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subject_id",
      referencedColumnName: "id",
    },
  })
  subjects: Subject[];
}
