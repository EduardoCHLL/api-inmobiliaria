import { AdviserModel } from "../../domain/models/adviser.model";
import Result from "../../../shared/application/interfaces/result.interface";
import { DTOAbstract } from "../../../shared/application/interfaces/dtos/abstract.dto";

const FilterFieldActiveInAdviser = (adviser: AdviserModel) => {
  const obj = Object.assign({}, adviser);
  delete obj.active;
  return obj;
};

export interface CB<T> {
  cb(result: Result<T>): Result<T>;
}

export class AdviserDTO extends DTOAbstract<AdviserModel> {
  callback(result: Result<AdviserModel>): Result<AdviserModel> {
    const data = result.payload.data;

    if (Array.isArray(data)) {
      result.payload.data = data.map(FilterFieldActiveInAdviser);
    } else {
      delete (result.payload.data as AdviserModel).active;
    }

    return result;
  }
}
