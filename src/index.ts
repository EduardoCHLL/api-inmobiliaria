import ServerBootstrap from './service/server.bootstrap'
import DatabaseBootstrap from "./service/databse.boostrap";
const serverBootstrap = new ServerBootstrap();
const databaseBootstrap = new DatabaseBootstrap();
(async () => {
  try {
    await serverBootstrap.initialize();
    await databaseBootstrap.initialize()
  } catch (error) {
    console.log("Error", error);
  }
})();
