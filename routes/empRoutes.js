import express from "express"
import { empData } from "../controller/empController.js"
const EmpRoutes=express.Router()



EmpRoutes.get("/all",empData)



export default EmpRoutes