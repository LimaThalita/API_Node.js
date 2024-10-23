const connection = require('../../Database/connection.js')
import express from 'express'
const router = express.Router()
import TaskController from '../Controllers/Controllers/TaskController.js'; 


router.post('/novaTarefa', TaskController.novaTarefa);  

module.exports = router