import express from 'express'
import { currentUser, login, logout, signup } from '../controller/userController.js'
import authUser from '../middlewares/authUser.js'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/currentUser', authUser, currentUser)
userRouter.get('/logout', authUser, logout)


export default userRouter