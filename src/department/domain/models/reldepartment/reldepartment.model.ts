import { DepartmentEntity } from "../department/department.entity"
import {SupplierEntity} from "../../../../supplier/domain/models/supplier.entity"
import {AdviserEntity} from "../../../../adviser/domain/models/adviser.entity"

export class RelDepartmentModel {
  constructor(
   
    public id: number,
    public department: DepartmentEntity,
    public adviser_id: AdviserEntity ,
    public body: JSON ,
    public price: number ,
    public current_currency: string ,
    public adreess: string ,
    public antiquity: number ,
    public bathroom_count: number ,
    public floor_number: number ,
    public garage: string ,
    public gas_service: SupplierEntity ,
    public drainage_service: SupplierEntity ,
    public water_service: SupplierEntity ,
    public datetime_publication: Date ,
    public active: boolean ,
  ) {}
}
