import { AdviserModel } from "../domain/models/adviser.model";
import { AdviserRepository } from "../domain/repositories/adviser.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { AdviserEntity } from "../domain/models/adviser.entity";
import Result from "../../shared/application/interfaces/result.interface";
import DatabaseBootstrap from "../../service/databse.boostrap";
import { Repository } from "typeorm";
import { ResponseDto } from "../../shared/application/interfaces/dtos/response.dto";

export class AdviserInfrastructure
  extends BaseInfrastructure<AdviserModel>
  implements AdviserRepository
{
  constructor() {
    super(AdviserEntity, "AdviserInfrastructure");
  }

  async getAll(where: object = {}): Promise<Result<AdviserModel>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<AdviserModel> =
      dataSource.getRepository(AdviserEntity);

    const data: AdviserModel[] = await repository.find({ where });

    return ResponseDto(  data);
  }

  reportByAdviser(id: number): Promise<AdviserModel[]> {
    throw new Error("Method not implemented.");
  }
}
