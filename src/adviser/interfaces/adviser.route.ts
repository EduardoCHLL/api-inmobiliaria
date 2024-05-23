import { AdviserController } from "./adviser.controller";
import { AdviserApplication } from "../application/adviser.application";
import { AdviserInfrastructure } from "../infrastructure/adviser.infrastructure";
import { BaseRouter } from "../../shared/interfaces/base-router";

const infrastructure = new AdviserInfrastructure();
const application = new AdviserApplication(infrastructure);
const controller = new AdviserController(application);

export default class extends BaseRouter {
  constructor() {
    super(controller);
  }

  mountRoutes(): void {}
}
