import { LocationEntity } from "../../../location/domain/models/location.entity";
export class TypeLocationModel {
  constructor(
    public id: number,
    public type_description: string,
    public location: LocationEntity[]
  ) {}
  }
  