import { RelDepartmentModel } from "../domain/models/reldepartment/reldepartment.model";
import { RelDepartmentRepository } from "../domain/repositories/reldepartment.repository";
import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { RelDepartmentDTO } from "./dtos/reldepartment/dto";

export class RelDepartmentApplication extends BaseApplication<RelDepartmentModel> {
  constructor(private repositoryRelDepartment: RelDepartmentRepository) {
    super(repositoryRelDepartment, new RelDepartmentDTO(), "RelDepartmentApplication");
  }

  async getAll() {
    return await this.repositoryRelDepartment.findAll({}, [], {});
  }

  async getReportByRelDepartment(id: number) {
    return await this.repositoryRelDepartment.reportByRelDepartment(id);
  }
}
