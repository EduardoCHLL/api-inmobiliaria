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

  async getAll(where: object = {}): Promise<Result<DepartmentModel>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<DepartmentModel> =
      dataSource.getRepository(DepartmentEntity);

    const data: DepartmentModel[] = await repository.find({ where });

    return ResponseDto(  data);
  }

  reportByDepartment(id: number): Promise<DepartmentModel[]> {
    throw new Error("Method not implemented.");
  }
}
