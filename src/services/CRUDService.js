import bcrypt from'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
//tạo mới use
let createNewUser = async (data)=>{
  return new Promise(async (resolve , reject) =>{
    try{
      let hasUserPasswordFrom = await hasUserPassword(data.password)
      await db.User.create({
        email: data.email,
        password: hasUserPasswordFrom,
        firstName: data.firstname,
        lastName: data.lastname,
        address: data.address,
        phoneNumber: data.phonenumber,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId
      })
      resolve('ok create a new user succeed')
    }catch (e){
        reject(e)
    }

  })
}
// mã hóa paswork
const hasUserPassword = (password)=>{
  return new Promise(async(resolve, reject)=>{
    try{
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword)
    }catch(e){
      reject(e)
    }
  })
}

//lay thong tin use
const getAllUser = ()=>{
  return new Promise(async(resolve, reject)=>{
      try {
        const users = await db.User.findAll({
          raw:true
        })
        resolve(users)
      } catch (error) {
        reject(error)
      }
  })
}
//lay thong tin userinfo boi id
const getUserInfoById =(id)=>{
  return new Promise(async(resolve, reject)=>{
    try {
      const user = await db.User.findOne({ where: { id: id}, raw:true })
      if(user)
      resolve(user)
      resolve([])
    } catch (error) {
      reject(error)
    }
  })
}
const updateUserData = (data) =>{
  return new Promise(async(resolve, reject)=>{
    try {
      const user = await db.User.findOne({
        where:{id :data.id}
      })
      if(user){
        user.firstName =data.firstname
        user.lastName = data.lastname
        user.address = data.address
        await user.save()
        const allUser = await db.User.findAll()
        resolve(allUser)
      }else{

      }
    } catch (error) {
      reject(error)
    }
  })
}
const deleteUserById = id =>{
  return new Promise(async(resolve, reject)=>{
    try {
      const user = await db.User.findOne({where:{id: id}})
      if(user){
        await user.destroy();
      }
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  createNewUser: createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById
}