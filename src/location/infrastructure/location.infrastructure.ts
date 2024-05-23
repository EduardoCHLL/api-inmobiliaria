import { LocationModel } from "../domain/models/location.model";
import { LocationRepository } from "../domain/repositories/location.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { LocationEntity } from "../domain/models/location.entity";
import { TypeLocationEntity } from "../../typelocation/domain/models/typelocation.entity";
import { TypeLocationModel } from "../../typelocation/domain/models/typelocation.model";


import Result from "../../shared/application/interfaces/result.interface";
import DatabaseBootstrap from "../../service/databse.boostrap";
import { Repository } from "typeorm";
import { ResponseDto } from "../../shared/application/interfaces/dtos/response.dto";
import _ from "lodash"


export class LocationInfrastructure
  extends BaseInfrastructure<LocationModel>
  implements LocationRepository {
  constructor() {
    super(LocationEntity, "LocationInfrastructure");
  }

  async getAll(where: object = {}): Promise<Result<LocationModel>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<LocationModel> = dataSource.getRepository(LocationEntity);

    const data: LocationModel[] = await repository.find({ where });

    return ResponseDto(data);
  }

  async reportByLocation(district: string): Promise<any> {

    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<TypeLocationModel> = dataSource.getRepository(TypeLocationEntity);
    const typeModel: TypeLocationModel[] = await repository.find({});
    console.log({ typeModel })



    const tipoLocalizacion = _.reduce(typeModel, (acc, item) => {
      acc[item.type_description] = item.id;
      return acc;
    }, {} as { [key: string]: number });

    console.log(tipoLocalizacion);
    const query = `
    WITH distrito AS (
      SELECT 
          d.id,
          CONCAT(ps.name,', ',dp.name,', ',p.name ,', ',d.name) as direccion
      FROM location d  
      INNER JOIN location p ON p.id = d.parentid AND d.typeid = ${tipoLocalizacion['Distrito']}  AND p.typeid = ${tipoLocalizacion['Provincia']} 
      INNER JOIN location dp ON dp.id = p.parentid AND p.typeid =  ${tipoLocalizacion['Provincia']} AND dp.typeid =  ${tipoLocalizacion['Departamento']}      
      INNER JOIN location ps ON ps.id = dp.parentid AND dp.typeid = ${tipoLocalizacion['Departamento']} AND ps.typeid = ${tipoLocalizacion['Pais']}
    )
    SELECT * FROM distrito
    where upper(direccion) like '%${district.toUpperCase()}%';
    `;
    console.log(query)
    const parameters = [district];
    console.log(query, parameters);
    const data = await dataSource.query(query, parameters);
 
    return ResponseDto(data);
  }
}
