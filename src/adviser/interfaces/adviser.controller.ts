import { AdviserApplication } from "../application/adviser.application";
import { Response, Request } from "express";
import { AdviserFactory } from "../domain/models/adviser.factory";
 
 

export class AdviserController {
  constructor(private application: AdviserApplication) {
    this.list = this.list.bind(this);
    this.listOne = this.listOne.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async list(req: Request, res: Response) {
    
    const advisers = await this.application.findAll(
      {  },
      [],
      {}
    );
    res.json(advisers);
  }

  async listOne(req: Request, res: Response) {
 
    const advisers = await this.application.findOne({ id: +req.params.id }, []);
    res.json(advisers);
  }

  async add(req: Request, res: Response) {
    const adviser = new AdviserFactory().create(req.body);
    const result = await this.application.add(adviser);
    res.json(result);
  }

  async update(req: Request, res: Response) {
 
    const id = Number(req.params.id);
    const adviserToInsert: any = { id, ...req.body };

    const adviser = new AdviserFactory().create(adviserToInsert);
    const result = await this.application.update(adviser, {id}, []);
    res.json(result);
  }
  async delete(req: Request, res: Response) {
 
    const id = +req.params.id;
    const advisers = await this.application.delete({ id });
    res.json(advisers);
  }
}
