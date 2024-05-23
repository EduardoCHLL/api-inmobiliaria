import { DepartmentController } from "./department.controller";
import { DepartmentApplication } from "../application/department.application";
import { DepartmentInfrastructure } from "../infrastructure/department.infrastructure";
import { BaseRouter } from "../../shared/interfaces/base-router";

const infrastructure = new DepartmentInfrastructure();
const application = new DepartmentApplication(infrastructure);
const controller = new DepartmentController(application);

export default class extends BaseRouter {
  constructor() {
    super(controller);
  }

  mountRoutes(): void {}
}
