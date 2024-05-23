import { TypeLocationEntity } from "../../../typelocation/domain/models/typelocation.entity";
import { LocationEntity } from "../../../location/domain/models/location.entity";
export class LocationModel {
  constructor(
    public id: number ,
    public parent: LocationEntity,
    public typeloc: TypeLocationEntity,
    public name: string,
    public url: string,
    public active: boolean,

  ) {}
}
