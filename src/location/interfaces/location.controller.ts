import { LocationApplication } from "../application/location.application";
import { Response, Request } from "express";
import { LocationFactory } from "../domain/models/location.factory";
 
import _ from "lodash";

export class LocationController {
  constructor(private application: LocationApplication) {
    this.list = this.list.bind(this);
    this.listOne = this.listOne.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getReportByLocation = this.getReportByLocation.bind(this);

  }

  async list(req: Request, res: Response) {
    console.log("LIST")
    const locations = await this.application.findAll(
      {  },
      [],
      {}
    );
    res.json(locations);
  }

  async listOne(req: Request, res: Response) {
 
    const locations = await this.application.findOne({ id: +req.params.id }, []);
    res.json(locations);
  }

  async add(req: Request, res: Response) {
    const location = new LocationFactory().create(req.body);
    const result = await this.application.add(location);
    res.json(result);
  }

  async update(req: Request, res: Response) {
 
    const id = Number(req.params.id);
    const locationToInsert: any = { id, ...req.body };

    const location = new LocationFactory().create(locationToInsert);
    const result = await this.application.update(location, {id}, []);
    res.json(result);
  }
  async delete(req: Request, res: Response) {
 
    const id = +req.params.id;
    const locations = await this.application.delete({ id });
    res.json(locations);
  }

  async getReportByLocation(req: Request, res: Response) { 
    const {district} = req.params
    if (_.isNil(district)) return res.status(404).json({ payload: {data:[]} });
    const locations = await this.application.getReportByLocation(district);
    res.json(locations);
    
      
  }
}
