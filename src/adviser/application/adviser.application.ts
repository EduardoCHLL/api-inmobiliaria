import { AdviserModel } from "../domain/models/adviser.model";
import { AdviserRepository } from "../domain/repositories/adviser.repository";
import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { AdviserDTO } from "./dtos/dto";

export class AdviserApplication extends BaseApplication<AdviserModel> {
  constructor(private repositoryAdviser: AdviserRepository) {
    super(repositoryAdviser, new AdviserDTO(), "AdviserApplication");
  }

  async getAll() {
    return await this.repositoryAdviser.findAll({}, [], {});
  }

  async getReportByAdviser(id: number) {
    return await this.repositoryAdviser.reportByAdviser(id);
  }
}
