import bcrypt from'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);

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
module.exports = {
  createNewUser: createNewUser
}