import { DepartmentModel } from "./department.model";
import { ClientEntity } from '../../../../client/domain/models/client.entity'
import { LocationEntity } from '../../../../location/domain/models/location.entity'
import { TypeStateEntity } from '../../../../typestate/domain/models/typestate.entity'
import { CompanyEntity } from '../../../../company/domain/models/company.entity'
 

export interface IDepartment {
  id : string , 
  loc_id : LocationEntity , 
  owner : ClientEntity , 
  previous_owner : ClientEntity , 
  company : CompanyEntity , 
  ty_re_state : TypeStateEntity , 
  datetime_insertion : Date , 
  datetime_update : Date , 
  active : boolean , 
}

export class DepartmentFactory {
  create(department: Partial<IDepartment>) {
   
    const id = department.id;
    const loc_id = department.loc_id;
    const owner = department.owner;
    const previous_owner = department.previous_owner;
    const company = department.company;
    const ty_re_state = department.ty_re_state;
    const datetime_insertion = department.datetime_insertion;
    const datetime_update = department.datetime_update;
    const active = department.active||true;

 

    return new DepartmentModel(
      id
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
