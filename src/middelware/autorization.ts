import { Request, Response, NextFunction } from "express";
import yenv from "yenv";
const env = yenv();
const Acces_KEY = env.Acces_KEY;

export class Authorization {
    static canActivate(req: Request, res: Response, next: NextFunction) {
      console.log("canActivate");
        console.log(req.headers.accesskey)
        
        if (req.headers.accesskey === Acces_KEY) {
            next()
        } else { 
            res.status(401).json({ error: 'No está autorizado' });
        }
   
  }
   
}
