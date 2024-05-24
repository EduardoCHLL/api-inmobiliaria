import { RelDepartmentController } from "../reldepartment/reldepartment.controller";
import { RelDepartmentApplication } from "../../application/reldepartment.application";
import { RelDepartmentInfrastructure } from "../../infrastructure/reldepartment.infrastructure";
import { BaseRouter } from "../../../shared/interfaces/base-router";

const infrastructure = new RelDepartmentInfrastructure();
const application = new RelDepartmentApplication(infrastructure);
const controller = new RelDepartmentController(application);

export default class extends BaseRouter {
  constructor() {
    super(controller);
  }

  mountRoutes(): void {}
  // override mountRoutesCommons(): void {
  //   this.expressRouter.get("/",controller.list);
  //   this.expressRouter.get("/search/:district",controller.getReportByLocation);
  //   this.expressRouter.get("/:id",controller.listOne);
  //   this.expressRouter.post("/", controller.add);
  //   this.expressRouter.put("/:id",controller.update);
  //   this.expressRouter.delete("/:id",controller.delete);
  // }
}
