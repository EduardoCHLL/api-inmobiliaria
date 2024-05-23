import Result from "../../../shared/application/interfaces/result.interface";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";
import { LocationModel } from "../models/location.model";

export interface LocationRepository extends BaseRepository<LocationModel, number> {
  getAll(where: object): Promise<Result<LocationModel>>;
  reportByLocation(district: string): Promise<LocationModel[]>;
}
