import Result from "../../../shared/application/interfaces/result.interface";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";
import { AdviserModel } from "../models/adviser.model";

export interface AdviserRepository extends BaseRepository<AdviserModel, number> {
  getAll(where: object): Promise<Result<AdviserModel>>;
  reportByAdviser(id: number): Promise<AdviserModel[]>;
}
