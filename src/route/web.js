import express from "express"
import homeControler from "../controllers/homeControllers"

let router = express.Router()
let initWebRoutes = app =>{

  router.get('/',homeControler.getHomePage)
  router.get('/crud',homeControler.getCRUD);
  router.post('/post-crud',homeControler.postCRUD)

  router.get('/get-crud', homeControler.displayCRUD)

  //edit user
  router.get('/edit-crud', homeControler.getEditCRUD)
  router.post('/put-crud', homeControler.putCRUD)
  router.get('/delete-crud', homeControler.deleteCRUD)

  return app.use('/',router)
}

module.exports = initWebRoutes