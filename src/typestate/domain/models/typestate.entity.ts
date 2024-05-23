 
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "type_state" })
export class TypeStateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;
 
}
