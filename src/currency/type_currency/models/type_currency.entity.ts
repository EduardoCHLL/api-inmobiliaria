 
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "type_currency" })
export class TypeCurrencyEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar" })
  description: string;
 
}
