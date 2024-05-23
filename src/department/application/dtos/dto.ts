import { DepartmentModel } from "../../domain/models/department/department.model";
import Result from "../../../shared/application/interfaces/result.interface";
import { DTOAbstract } from "../../../shared/application/interfaces/dtos/abstract.dto";

const FilterFieldActiveInDepartment = (department: DepartmentModel) => {
  const obj = Object.assign({}, department);
  delete obj.active;
  return obj;
};

export interface CB<T> {
  cb(result: Result<T>): Result<T>;
}

export class DepartmentDTO extends DTOAbstract<DepartmentModel> {
  callback(result: Result<DepartmentModel>): Result<DepartmentModel> {
    const data = result.payload.data;

    if (Array.isArray(data)) {
      result.payload.data = data.map(FilterFieldActiveInDepartment);
    } else {
      delete (result.payload.data as DepartmentModel).active;
    }

    return result;
  }
}
