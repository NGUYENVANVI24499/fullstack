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
  return res.send('post crud from finish')
}
//hiển thị users
const displayCRUD =async (req, res) =>{
  const data = await CRUDService.getAllUser()
  return res.render("displayCRUD.ejs",{data:data})
}
module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD,
  displayCRUD
}