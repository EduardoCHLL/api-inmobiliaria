 
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,   } from "typeorm";
import { ClientEntity } from '../../../../client/domain/models/client.entity'
import { LocationEntity } from '../../../../location/domain/models/location.entity'
import { TypeStateEntity } from '../../../../typestate/domain/models/typestate.entity'
import { CompanyEntity } from '../../../../company/domain/models/company.entity'
 


@Entity({ name: "department" })
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

 
  @ManyToOne((type) => LocationEntity, (location) => location.id)
  loc_id: LocationEntity;



  @ManyToOne((type) => ClientEntity, (client) => client.clientid)
  owner: ClientEntity;


  


  @ManyToOne((type) => ClientEntity, (client) => client.clientid)
  previous_owner: ClientEntity;

  @ManyToOne((type) => CompanyEntity, (company) => company.id)
  company_id: CompanyEntity;
 
  
 
  @ManyToOne((type) => TypeStateEntity, (typestate) => typestate.type_id)
  type_real_estate: LocationEntity;

 

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datetime_insertion: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datetime_update: Date;

  @Column({ type: "boolean", default: true })
  active: boolean;

  
}
