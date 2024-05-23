 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "typestate" })
export class TypeStateEntity {
  @PrimaryGeneratedColumn()
  type_id: number;

  @Column({ type: "varchar" })
  name: string;
 
}
