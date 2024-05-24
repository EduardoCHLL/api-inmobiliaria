import { RelDepartmentApplication } from "../../application/reldepartment.application";
import { Response, Request } from "express";
import { RelDepartmentFactory } from "../../domain/models/reldepartment/reldepartment.factory";
 
 

export class RelDepartmentController {
  constructor(private application: RelDepartmentApplication) {
    this.list = this.list.bind(this);
    this.listOne = this.listOne.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async list(req: Request, res: Response) {
    
    const reldepartments = await this.application.findAll(
      {},
      [ ],
      {}
    );

    
    res.json(reldepartments);
  }

  async listOne(req: Request, res: Response) {
 
    const reldepartments = await this.application.findOne({ id: +req.params.id }, []);
    res.json(reldepartments);
  }

  async add(req: Request, res: Response) {
    const reldepartment = new RelDepartmentFactory().create(req.body);
    const result = await this.application.add(reldepartment);
    res.json(result);
  }

  async update(req: Request, res: Response) {
 
    const id = Number(req.params.id);
    const reldepartmentToInsert: any = { id, ...req.body };

    const reldepartment = new RelDepartmentFactory().create(reldepartmentToInsert);
    const result = await this.application.update(reldepartment, {id}, []);
    res.json(result);
  }
  async delete(req: Request, res: Response) {
 
    const id = +req.params.id;
    const reldepartments = await this.application.delete({ id });
    res.json(reldepartments);
  }
}
