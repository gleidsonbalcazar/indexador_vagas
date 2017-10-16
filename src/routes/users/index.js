import express from 'express'
import create from './../../services/users/create'
import auth from './../../services/users/auth'
import logout from './../../services/users/logout'

const router =  express.Router()

router.post('/',create)
router.post('/auth', auth)
router.get('/logout', logout)

module.exports = router