import db from '../models/index'
import CRUDService from '../services/CRUDService'
let getHomePage = async (req, res)=>{
  try {
    let data = await db.User.findAll();
    //console.log(data)
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
 //console.log(mess)
  return res.send('post crud from finish(thanh cong)')
}
//hiển thị users
const displayCRUD =async (req, res) =>{
  const data = await CRUDService.getAllUser()
  return res.render("displayCRUD.ejs",{data:data})
}

const getEditCRUD = async(req, res)=>{
  const userId = req.query.id
  if(userId){
    const userData = await CRUDService.getUserInfoById(userId)
    return res.render("editCRUD.ejs",{userData:userData})
  }
  else
    return res.send('hello ko toin ta')
}

const putCRUD = async (req, res)=>{
  const data = req.body
  const allUser =  await CRUDService.updateUserData(data)
  return res.render("displayCRUD.ejs",{data:allUser})
}
const deleteCRUD = async(req, res)=>{
  const id = req.query.id
  if(id){
    await CRUDService.deleteUserById(id)
    return res.send('xoa thanh cong')
  }else{
    return res.send('ko tim thay')
  }
 
}

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD,
  displayCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
}