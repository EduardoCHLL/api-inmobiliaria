 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "client" })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  clientid: number;

  @Column({ type: "varchar" })
  name: string;
 
}
