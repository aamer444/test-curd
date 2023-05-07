import express from "express"
import { createUser ,getSingleUser,updateUser, getAllUser,deleteUser } from "../controller/empController.js"
const EmpRoutes=express.Router()



EmpRoutes.get("/getAllUser",getAllUser)

EmpRoutes.post('/createUser',createUser)

EmpRoutes.put('/updateUser/:id',updateUser)

EmpRoutes.get('/getSingleUser/:id',getSingleUser)

EmpRoutes.delete('/deleteUser/:userid',deleteUser)



export default EmpRoutes