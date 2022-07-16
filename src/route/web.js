import express from "express"
import homeControler from "../controllers/homeControllers"

let router = express.Router()
let initWebRoutes = app =>{
  // router.get('/',homeControler.getHomePage);
  router.get('/',homeControler.getHomePage)
  router.get('/crud',homeControler.getCRUD);
  router.post('/post-crud',homeControler.postCRUD)

  router.get('/get-crud', homeControler.displayCRUD)


  return app.use('/',router)
}

module.exports = initWebRoutes