import { CompanyEntity} from '../../../company/domain/models/company.entity'
import { AdviserModel } from "./adviser.model";
export interface IAdviser {
  id: number,
  name: string,
  lastname: string,
  company: CompanyEntity,
  email: string,
  phone_number: string,
  active: boolean
}

export class AdviserFactory {
  create(adviser: Partial<IAdviser>) {
    const id = adviser.id;
    const name = adviser.name;
    const lastname = adviser.lastname;
    const company = adviser.company;
    const email = adviser.email;
    const phone_number = adviser.phone_number;
    const active = adviser.active||true
 

    return new AdviserModel(
      id
      ,name
      ,lastname
      ,company
      ,email
      ,phone_number
      ,active
    );
  }
}
