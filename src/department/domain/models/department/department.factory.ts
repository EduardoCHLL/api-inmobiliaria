import { DepartmentModel } from "./department.model";
import {ClientEntity} from '../../../../client/domain/models/client.entity'
export interface IDepartment {
  departmentId : string , 
  loc_id : number , 
  owner : ClientEntity , 
  previous_owner : number , 
  company : number , 
  ty_re_state : number , 
  datetime_insertion : Date , 
  datetime_update : Date , 
  active : boolean , 
}

export class DepartmentFactory {
  create(department: Partial<IDepartment>) {
   
    const departmentId = department.departmentId;
    const loc_id = department.loc_id||0;
    const owner = department.owner;
    const previous_owner = department.previous_owner;
    const company = department.company;
    const ty_re_state = department.ty_re_state;
    const datetime_insertion = department.datetime_insertion;
    const datetime_update = department.datetime_update;
    const active = department.active||true;

 

    return new DepartmentModel(
      departmentId
      ,loc_id
      ,owner
      ,previous_owner
      ,company
      ,ty_re_state
      ,datetime_insertion
      ,datetime_update
      ,active
    );
  }
}
