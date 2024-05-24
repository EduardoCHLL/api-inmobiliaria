 
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { ClientEntity } from '../../../../client/domain/models/client.entity'
import { LocationEntity } from '../../../../location/domain/models/location.entity'
import { TypeStateEntity } from '../../../../typestate/domain/models/typestate.entity'
import { CompanyEntity } from '../../../../company/domain/models/company.entity'
import { RelDepartmentEntity } from '../../../../department/domain/models/reldepartment/reldepartment.entity'

 


@Entity({ name: "department" })
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;


 
  @ManyToOne((type) => LocationEntity, (location) => location.id)
  loc_id: LocationEntity;



  @ManyToOne((type) => ClientEntity, (client) => client.id)
  owner: ClientEntity;


  @ManyToOne((type) => ClientEntity, (client) => client.id)
  previous_owner: ClientEntity;

  @ManyToOne((type) => CompanyEntity, (company) => company.id)
  company: CompanyEntity;
 
  
 
  @ManyToOne((type) => TypeStateEntity, (typestate) => typestate.id)
  ty_re_state: TypeStateEntity;

 

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datetime_insertion: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datetime_update: Date;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @OneToOne(() => RelDepartmentEntity, (reldepartment) => reldepartment.department, { cascade: true })
  @JoinColumn()
  relDepartment: RelDepartmentEntity;
}
