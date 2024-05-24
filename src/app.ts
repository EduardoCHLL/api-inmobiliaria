import express, { Application, Request, Response } from "express";
import routesDriver from "./drivers/interfaces/drivers.route";
import routesLocation from "./location/interfaces/location.route";
import routesAdviser from "./adviser/interfaces/adviser.route";
import routesDepartment from "./department/interfaces/department/department.route";
import routesRelDepartment from "./department/interfaces/reldepartment/reldepartment.route";

 



class App {
    expressApp: Application;
  
    constructor() {
      this.expressApp = express();
      this.mountMiddlewares();
      this.mountHealthCheck();
      this.mountRoutes();
    }
  
    mountRoutes(): void {
      this.expressApp.use("/Driver", new routesDriver().expressRouter);
      this.expressApp.use("/location", new routesLocation().expressRouter);
      this.expressApp.use("/adviser", new routesAdviser().expressRouter);
      this.expressApp.use("/department", new routesDepartment().expressRouter);
      this.expressApp.use("/reldepartment", new routesRelDepartment().expressRouter);
    }
  
    mountMiddlewares(): void {
      this.expressApp.use(express.json());
      this.expressApp.use(express.urlencoded({ extended: true })); // request.body
    }
  
    mountHealthCheck(): void {
      this.expressApp.get("/", (req: Request, res: Response) => {
        res.send("All is good!");
      });
  
      this.expressApp.get("/healthcheck", (req, res) => {
        res.send("All is good!");
      });
    }
  }
  
  export default new App().expressApp;