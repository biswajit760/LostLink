import express from 'express'
import { addReportItem, deleteItem, getFoundItems, getLostItems } from '../controller/reportItemController.js'
import {upload} from '../middlewares/multer.js'
import authUser from '../middlewares/authUser.js'

const reportItemRouter = express.Router()

reportItemRouter.post('/add',authUser, upload.single("image"),  addReportItem)
reportItemRouter.delete('/delete/:id',authUser, deleteItem)
reportItemRouter.get("/report/found", getFoundItems);
reportItemRouter.get("/report/lost", getLostItems);


export default reportItemRouter