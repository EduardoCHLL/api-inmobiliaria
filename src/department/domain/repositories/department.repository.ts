import Result from "../../../shared/application/interfaces/result.interface";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";
import { DepartmentModel } from "../models/department/department.model";

export interface DepartmentRepository extends BaseRepository<DepartmentModel, number> {
  getAll(where: object): Promise<Result<DepartmentModel>>;
  reportByDepartment(id: number): Promise<DepartmentModel[]>;
}
