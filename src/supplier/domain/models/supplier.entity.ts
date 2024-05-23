 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "supplier" })
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  phone_number: string;
  @Column({ type: "varchar" })
  email: string;
  @Column({ type: "boolean" })
  active: boolean;
}
