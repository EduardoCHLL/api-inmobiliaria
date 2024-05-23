export class AdviserModel {
  constructor(
    public adviser: number,
    public name: string,
    public lastname: string,
    public company: number,
    public email: string,
    public phone_number: string,
    public active: boolean
  ) {}
}
