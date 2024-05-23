import { DepartmentModel } from "../domain/models/department/department.model";
import { DepartmentRepository } from "../domain/repositories/department.repository";
import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { DepartmentDTO } from "./dtos/dto";

export class DepartmentApplication extends BaseApplication<DepartmentModel> {
  constructor(private repositoryDepartment: DepartmentRepository) {
    super(repositoryDepartment, new DepartmentDTO(), "DepartmentApplication");
  }

  async getAll() {
    return await this.repositoryDepartment.findAll({}, [], {});
  }

  async getReportByDepartment(id: number) {
    return await this.repositoryDepartment.reportByDepartment(id);
  }
}
