import express from "express"
import homeControler from "../controllers/homeControllers"

let router = express.Router()
let initWebRoutes = app =>{
  // router.get('/',homeControler.getHomePage);
  router.get('/',homeControler.getHomePage)

  return app.use('/',router)
}

module.exports = initWebRoutes