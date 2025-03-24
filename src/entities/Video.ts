import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "./Room";

@Entity("videos") // taqbela
export class Video {
  @PrimaryGeneratedColumn() // coluna
  id: number;

  @Column({ type: "text" }) // coluna
  title: string;

  @Column({ type: "text" }) // coluna
  url: string;

  @ManyToOne(() => Room, (room) => room.videos) // coluna com relação muitos para um
  @JoinColumn({ name: "room_id" }) // tabela que possui a chave estrangeira
  room: Room;
}
