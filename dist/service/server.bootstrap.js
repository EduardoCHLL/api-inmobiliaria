"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const http_1=__importDefault(require("http")),app_1=__importDefault(require("../app")),boostrap_1=__importDefault(require("./boostrap")),yenv_1=__importDefault(require("yenv")),env=(0,yenv_1.default)();class default_1 extends boostrap_1.default{initialize(){return new Promise(((e,t)=>{const r=http_1.default.createServer(app_1.default);console.log(env),r.listen(env.PORT).on("listening",(()=>{e(!0),console.log(`Server is running on port ${env.PORT}`)})).on("error",t)}))}}exports.default=default_1;