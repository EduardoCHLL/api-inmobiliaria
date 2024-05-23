 
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "typestate" })
export class TypeStateEntity {
  @PrimaryGeneratedColumn()
  type_id: number;

  @Column({ type: "varchar" })
  name: string;
 
}
