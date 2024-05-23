import { AdviserModel } from "./adviser.model";

export interface IAdviser {
  adviser: number,
  name: string,
  lastname: string,
  company: number,
  email: string,
  phone_number: string,
  active: boolean
}

export class AdviserFactory {
  create(adviser: Partial<IAdviser>) {
    const adviserid = adviser.adviser;
    const name = adviser.name;
    const lastname = adviser.lastname;
    const company = adviser.company;
    const email = adviser.email;
    const phone_number = adviser.phone_number;
    const active = adviser.active||true
 

    return new AdviserModel(
      adviserid
      ,name
      ,lastname
      ,company
      ,email
      ,phone_number
      ,active
    );
  }
}
