import { DepartmentApplication } from "../../application/department.application";
import { Response, Request } from "express";
import { DepartmentFactory } from "../../domain/models/department/department.factory";
 
 

export class DepartmentController {
  constructor(private application: DepartmentApplication) {
    this.list = this.list.bind(this);
    this.listOne = this.listOne.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async list(req: Request, res: Response) {
    
    const departments = await this.application.findAll(
      {},
      ['loc_id','owner','previous_owner','company','ty_re_state','relDepartment'],
      {}
    );

    
    res.json(departments);
  }

  async listOne(req: Request, res: Response) {
 
    const departments = await this.application.findOne({ id: +req.params.id }, []);
    res.json(departments);
  }

  async add(req: Request, res: Response) {
    const department = new DepartmentFactory().create(req.body);
    const result = await this.application.add(department);
    res.json(result);
  }

  async update(req: Request, res: Response) {
 
    const id = Number(req.params.id);
    const departmentToInsert: any = { id, ...req.body };

    const department = new DepartmentFactory().create(departmentToInsert);
    const result = await this.application.update(department, {id}, []);
    res.json(result);
  }
  async delete(req: Request, res: Response) {
 
    const id = +req.params.id;
    const departments = await this.application.delete({ id });
    res.json(departments);
  }
}
