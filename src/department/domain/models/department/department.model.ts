import {ClientEntity} from '../../../../client/domain/models/client.entity'
export class DepartmentModel {
  constructor(
   
    public id : string , 
    public loc_id : number , 
    public owner : ClientEntity , 
    public previous_owner : number , 
    public company : number , 
    public ty_re_state : number , 
    public datetime_insertion : Date , 
    public datetime_update : Date , 
    public active : boolean , 
  ) {}
}
