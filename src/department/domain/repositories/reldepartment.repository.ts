import Result from "../../../shared/application/interfaces/result.interface";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";
import { RelDepartmentModel } from "../models/reldepartment/reldepartment.model";

export interface RelDepartmentRepository extends BaseRepository<RelDepartmentModel, number> {
  getAll(where: object): Promise<Result<RelDepartmentModel[]>>;
  reportByRelDepartment(id: number): Promise<RelDepartmentModel[]>;
}
