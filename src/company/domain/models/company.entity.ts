 
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "company" })
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar" })
  razonSocial: string;

  @Column({ type: "varchar" })
  ruc: string;
  @Column({ type: "varchar" })
  email: string;
  @Column({ type: "varchar" })
  phone_number: string;
}
