import { LocationModel } from "../domain/models/location.model";
import { LocationRepository } from "../domain/repositories/location.repository";
import { BaseApplication } from "../../shared/application/interfaces/base-application";
import { LocationDTO } from "./dtos/dto";

export class LocationApplication extends BaseApplication<LocationModel> {
  constructor(private repositoryLocation: LocationRepository) {
    super(repositoryLocation, new LocationDTO(), "LocationApplication");
  }

  async getAll() {
    return await this.repositoryLocation.findAll({}, [], {});
  }

  async getReportByLocation(district: string) {
    return await this.repositoryLocation.reportByLocation(district);
  }
}
