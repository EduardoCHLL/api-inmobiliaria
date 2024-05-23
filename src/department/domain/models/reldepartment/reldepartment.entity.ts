
import { Entity, PrimaryGeneratedColumn, Column, Double, ManyToOne} from "typeorm";
import { DepartmentEntity } from "../department/department.entity"
import { SupplierEntity } from "../../../../supplier/domain/models/supplier.entity"
import {AdviserEntity} from "../../../../adviser/domain/models/adviser.entity"



@Entity({ name: "rel_department" })
export class RelDepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @ManyToOne((type) => DepartmentEntity, (department) => department.id)
  department: DepartmentEntity;
 
  @ManyToOne((type) => AdviserEntity, (adviser) => adviser.id)
  adviser: AdviserEntity;


  @Column({ type: "json" })
  body: JSON;

  @Column({ type: "double" })
  price: Double;

  @Column({ type: "varchar" })
  current_currency: string;


  @Column({ type: "varchar" })
  adreess: string;


  @Column({ type: "numeric" })
  antiquity: number;


  @Column({ type: "numeric" })
  bathroom_count: number;

  @Column({ type: "numeric" })
  bedroom_count: number;

  @Column({ type: "numeric" })
  floor_number: number;


  @Column({ type: "varchar" })
  garage: string;


  @ManyToOne((type) => SupplierEntity, (supplier) => supplier.id)
  gas_service: SupplierEntity;


  @ManyToOne((type) => SupplierEntity, (supplier) => supplier.id)
  drainage_service: SupplierEntity;


  @ManyToOne((type) => SupplierEntity, (supplier) => supplier.id)
  water_service: SupplierEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datetime_publication: Date;
 


  @Column({ type: "boolean" })
  active: boolean;



}
