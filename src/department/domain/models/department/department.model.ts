import { ClientEntity } from '../../../../client/domain/models/client.entity'
import { LocationEntity } from '../../../../location/domain/models/location.entity'
import { TypeStateEntity } from '../../../../typestate/domain/models/typestate.entity'
import { CompanyEntity } from '../../../../company/domain/models/company.entity'
 

export class DepartmentModel {
  constructor(
   
    public id : string , 
    public loc_id : LocationEntity , 
    public owner: ClientEntity,
    public previous_owner : ClientEntity , 
    public company : CompanyEntity , 
    public ty_re_state : TypeStateEntity , 
    public datetime_insertion : Date , 
    public datetime_update : Date , 
    public active : boolean , 
  ) {}
}
