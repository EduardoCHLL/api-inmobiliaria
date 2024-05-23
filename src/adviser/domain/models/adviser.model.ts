import { CompanyEntity} from '../../../company/domain/models/company.entity'
export class AdviserModel {
  constructor(
    public id: number,
    public name: string,
    public lastname: string,
    public company: CompanyEntity,
    public email: string,
    public phone_number: string,
    public active: boolean
  ) {}
}
