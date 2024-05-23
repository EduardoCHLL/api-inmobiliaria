 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "type_currency" })
export class TypeCurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  description: string;
 
}
