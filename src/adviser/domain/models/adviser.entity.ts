 
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CompanyEntity} from '../../../company/domain/models/company.entity'
@Entity({ name: "adviser" })
export class AdviserEntity {
  @PrimaryGeneratedColumn()
  adviser: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 50 })
  lastname: string;

 

  @ManyToOne((type) => CompanyEntity, (Company) => Company.id)
  company: CompanyEntity;


  @Column({ type: "varchar", length: 50 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  phone_number: string;

  @Column({ type: "boolean", default: true })
  active: boolean;

  
}
