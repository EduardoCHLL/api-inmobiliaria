import { LocationModel } from "../../domain/models/location.model";
import Result from "../../../shared/application/interfaces/result.interface";
import { DTOAbstract } from "../../../shared/application/interfaces/dtos/abstract.dto";

const FilterFieldActiveInLocation = (Location: LocationModel) => {
  const obj = Object.assign({}, Location);
  delete obj.active;
  return obj;
};

export interface CB<T> {
  cb(result: Result<T>): Result<T>;
}

export class LocationDTO extends DTOAbstract<LocationModel> {
  callback(result: Result<LocationModel>): Result<LocationModel> {
    const data = result.payload.data;

    if (Array.isArray(data)) {
      result.payload.data = data.map(FilterFieldActiveInLocation);
    } else {
      delete (result.payload.data as LocationModel).active;
    }

    return result;
  }
}
