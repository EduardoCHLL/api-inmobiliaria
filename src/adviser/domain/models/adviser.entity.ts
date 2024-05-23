 
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "adviser" })
export class AdviserEntity {
  @PrimaryGeneratedColumn()
  adviser: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  lastname: string;

  @Column({ type: "numeric"})
  company: number;


  @Column({ type: "varchar", length: 50 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  phone_number: string;

  @Column({ type: "boolean", default: true })
  active: boolean;

  
}
