import db from '../models/index'
import CRUDService from '../services/CRUDService'
let getHomePage = async (req, res)=>{
  try {
    let data = await db.User.findAll();
    console.log(data)
    return res.render("homepage.ejs",{
      data: JSON.stringify(data)
    })  
  } catch (error) {
    console.log(error)
  }
}

const getCRUD =(req, res)=>{
  return res.render('crud')
}
const postCRUD = async(req, res)=>{
 let mess =  await CRUDService.createNewUser(req.body)
 console.log(mess)
  return res.send('post crud from')
}
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD
}