import { RelDepartmentModel } from "../domain/models/reldepartment/reldepartment.model";
import { RelDepartmentRepository } from "../domain/repositories/reldepartment.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { RelDepartmentEntity } from "../domain/models/reldepartment/reldepartment.entity";
import Result from "src/shared/application/interfaces/result.interface";
 

export class RelDepartmentInfrastructure
  extends BaseInfrastructure<RelDepartmentModel>
  implements RelDepartmentRepository
{
  constructor() {
    
    super(RelDepartmentEntity, "RelDepartmentInfrastructure");
  }
  getAll(where: object): Promise<Result<RelDepartmentModel[]>> {
    throw new Error("Method not implemented.");
  }
 
  reportByRelDepartment(id: number): Promise<RelDepartmentModel[]> {
    throw new Error("Method not implemented.");
  }
}
