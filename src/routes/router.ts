import express from 'express'

import usersController from '../controllers/users.controller'
import assetsController from '../controllers/assets.controller'

const router = express.Router()

// assets
router.get('/assets', assetsController.getAssets)

// users
router.get('/register', usersController.getUsers)

export default router
