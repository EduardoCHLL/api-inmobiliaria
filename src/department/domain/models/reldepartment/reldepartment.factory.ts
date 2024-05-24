import { RelDepartmentModel } from "./reldepartment.model";
import { DepartmentEntity } from "../department/department.entity"
import { SupplierEntity } from "../../../../supplier/domain/models/supplier.entity"
import {AdviserEntity} from "../../../../adviser/domain/models/adviser.entity"
export interface IDepartment {
  id: string,
  department : DepartmentEntity,
  adviser_id: AdviserEntity ,
  body: JSON ,
  price: number ,
  current_currency: string ,
  adreess: string ,
  antiquity: number ,
  bathroom_count: number ,
  floor_number: number ,
  garage: string ,
  gas_service: SupplierEntity ,
  drainage_service: SupplierEntity ,
  water_service: SupplierEntity ,
  datetime_publication: Date ,
  active: boolean ,
}

export class RelDepartmentFactory {
  create(RelDepartment: Partial<IDepartment>) {
   
  
 

    const id = RelDepartment.id ;
    const department = RelDepartment.department;
    const adviser_id = RelDepartment.adviser_id;
    const body = RelDepartment.body;
    const price = RelDepartment.price;
    const current_currency = RelDepartment.current_currency;
    const adreess = RelDepartment.adreess;
    const antiquity = RelDepartment.antiquity;
    const bathroom_count = RelDepartment.bathroom_count;
    const floor_number = RelDepartment.floor_number;
    const garage = RelDepartment.garage;
    const gas_service = RelDepartment.gas_service;
    const drainage_service = RelDepartment.drainage_service;
    const water_service = RelDepartment.water_service;
    const datetime_publication = RelDepartment.datetime_publication;
    const active = RelDepartment.active||true;

    return new RelDepartmentModel(
      id
      ,department
      ,adviser_id
      ,body
      ,price
      ,current_currency
      ,adreess
      ,antiquity
      ,bathroom_count
      ,floor_number
      ,garage
      ,gas_service
      ,drainage_service
      ,water_service
      ,datetime_publication
      ,active
    );
  }
}
