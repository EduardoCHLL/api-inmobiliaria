import { RelDepartmentModel } from "../../../domain/models/reldepartment/reldepartment.model";
import Result from "../../../../shared/application/interfaces/result.interface";
import { DTOAbstract } from "../../../../shared/application/interfaces/dtos/abstract.dto";

const FilterFieldActiveInRelDepartment = (reldepartment: RelDepartmentModel) => {
  const obj = Object.assign({}, reldepartment);
  delete obj.active;
  return obj;
};

export interface CB<T> {
  cb(result: Result<T>): Result<T>;
}

export class RelDepartmentDTO extends DTOAbstract<RelDepartmentModel> {
  callback(result: Result<RelDepartmentModel>): Result<RelDepartmentModel> {
    const data = result.payload.data;

    if (Array.isArray(data)) {
      result.payload.data = data.map(FilterFieldActiveInRelDepartment);
    } else {
      delete (result.payload.data as RelDepartmentModel).active;
    }

    return result;
  }
}
