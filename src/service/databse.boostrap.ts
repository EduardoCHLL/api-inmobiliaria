import { DatabaseListen } from "./boostrap";
import { DataSource, DataSourceOptions } from "typeorm";
import yenv from "yenv";

const env = yenv();

let source: DataSource;

export default class DatabaseBootstrap extends DatabaseListen {
  static get dataSource() {
    return source;
  }
  listen(): void {
    throw new Error("Method not implemented.");
  }
  
  initialize(): Promise<DataSource | Error> {
    const parametersConnection = {
        type: "postgres",
        host: env.DATABASES.POSGRESQL.HOST || "localhost",
        port: env.DATABASES.POSGRESQL.PORT || 5200,
        username: env.DATABASES.POSGRESQL.USERNAME || "root",
        password: (env.DATABASES.POSGRESQL.PASSWORD || "12345").toString(),
        entities: env.DATABASES.POSGRESQL.ENTITIES || ["src/**/*.entity.ts"],
        database: env.DATABASES.POSGRESQL.NAME || "dbnodejs",
        synchronize: env.DATABASES.POSGRESQL.SYNCHRONIZE || true,
        logging: env.DATABASES.POSGRESQL.LOGGING || false,
        schema: env.DATABASES.POSGRESQL.SCHEMA, // Agregar la opción schema aquí
      } as DataSourceOptions;
    
    const data = new DataSource(parametersConnection);
    source = data;
      console.log("Database connection", parametersConnection.database);
    return data.initialize();
  }
}
