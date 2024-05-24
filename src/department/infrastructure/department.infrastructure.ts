import { DepartmentModel } from "../domain/models/department/department.model";
import { DepartmentRepository } from "../domain/repositories/department.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { DepartmentEntity } from "../domain/models/department/department.entity";
import Result from "../../shared/application/interfaces/result.interface";
import DatabaseBootstrap from "../../service/databse.boostrap";
import { Repository } from "typeorm";
import { ResponseDto } from "../../shared/application/interfaces/dtos/response.dto";

export class DepartmentInfrastructure
  extends BaseInfrastructure<DepartmentModel>
  implements DepartmentRepository
{
  constructor() {
    
    super(DepartmentEntity, "DepartmentInfrastructure");
  }

  async getAll(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<DepartmentEntity>> {
    
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<DepartmentEntity> = dataSource.getRepository(DepartmentEntity);
    const _where = Object.assign(where, { active: true });
    console.log(_where,relations,order)
    const data: DepartmentEntity[] = await repository.find({
      where: _where,
      relations,
      order,
    });
    console.log(data)
    return ResponseDto<DepartmentEntity>(  data);
  }

  reportByDepartment(id: number): Promise<DepartmentModel[]> {
    throw new Error("Method not implemented.");
  }
}
