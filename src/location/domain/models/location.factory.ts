import { LocationModel } from "./location.model";
import { TypeLocationEntity } from "../../../typelocation/domain/models/typelocation.entity";
import { LocationEntity } from "../../../location/domain/models/location.entity";


export interface ILocation {
 

  id: number;
  parent: LocationEntity;
  typeloc: TypeLocationEntity;
  name: string;
  url: string;
  active : boolean;
}

export class LocationFactory {
  create(location: Partial<ILocation>) {
 

    const id = location.id||0;
    const parent = location.parent;
    const typeloc = location.typeloc;
    const name = location.name;
    const url = location.url;
    const active = location.active||true;


   

    return new LocationModel(
      id,
      parent,
      typeloc,
      name,
      url,
      active
    );
  }
}
