import {ClientEntity} from '../../../../client/domain/models/client.entity'
export class DepartmentModel {
  constructor(
   
    public departmentId : number , 
    public loc_id : number , 
    public owner : ClientEntity , 
    public previous_owner : number , 
    public company_id : number , 
    public type_real_estate : number , 
    public datetime_insertion : Date , 
    public datetime_update : Date , 
    public active : boolean , 
  ) {}
}
