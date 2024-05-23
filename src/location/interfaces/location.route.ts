import { LocationController } from "./location.controller";
import { LocationApplication } from "../application/location.application";
import { LocationInfrastructure } from "../infrastructure/location.infrastructure";
import { BaseRouter } from "../../shared/interfaces/base-router";

const infrastructure = new LocationInfrastructure();
const application = new LocationApplication(infrastructure);
const controller = new LocationController(application);

export default class extends BaseRouter {
  constructor() {
    super(controller);
  }

  mountRoutes(): void {}
  override mountRoutesCommons(): void {
    this.expressRouter.get("/",controller.list);
    this.expressRouter.get("/search/:district",controller.getReportByLocation);
    this.expressRouter.get("/:id",controller.listOne);
    this.expressRouter.post("/", controller.add);
    this.expressRouter.put("/:id",controller.update);
    this.expressRouter.delete("/:id",controller.delete);
  }
}
