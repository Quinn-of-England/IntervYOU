import { Router } from 'express'
import * as linkedinController from '../controllers/linkedin.js'

const linkedinRouter = Router()

linkedinRouter.post('/profile', linkedinController.get_profile)

export default linkedinRouter