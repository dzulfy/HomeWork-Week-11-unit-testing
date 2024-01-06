const express = require('express')
const router = express.Router()
const TodosController = require('../controllers/todoscontroller')

router.get('/', TodosController.getAll)
router.post('/', TodosController.create)
router.get('/:id', TodosController.getById)
router.delete('/:id', TodosController.delete)

module.exports = router