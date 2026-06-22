import {  Router } from 'express'
import { pingController } from '../../controllers/ping.controller'

const v1Router: Router = Router()

v1Router.get('/ping', pingController )

export default v1Router