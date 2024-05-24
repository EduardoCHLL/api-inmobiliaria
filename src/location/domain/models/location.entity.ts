 
import { TypeLocationEntity } from "../../../typelocation/domain/models/typelocation.entity";


import {  DepartmentEntity} from "../../../department/domain/models/department/department.entity";

import { Entity, PrimaryGeneratedColumn, Column,   ManyToOne,OneToMany } from "typeorm";
@Entity({ name: "location" })
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne((type) => LocationEntity, (location) => location.id)
  parent: LocationEntity;


  @ManyToOne((type) => TypeLocationEntity, (typelocation) => typelocation.id)
  typeloc: TypeLocationEntity;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar" ,nullable: true})
  url: string;

  @Column({ type: "boolean" })
  active: boolean;

  @OneToMany((type) => DepartmentEntity, (department) => department.loc_id)
  departmentes: DepartmentEntity[];
  
}
