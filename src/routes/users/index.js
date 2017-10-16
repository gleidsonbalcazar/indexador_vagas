import express from 'express'
import create from './../../services/users/create'
import auth from './../../services/users/auth'
import logout from './../../services/users/logout'
import showProfile from './../../services/users/show'

const router =  express.Router()

router.post('/',create)
router.post('/auth', auth)

router.get('/logout', logout)
router.get('/:id', showProfile)

module.exports = router