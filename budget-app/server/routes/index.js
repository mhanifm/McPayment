const router = require('express').Router()
const transactionController = require('../controllers/transactionController')

router.get('/transaction', transactionController.showAll)
router.post('/transaction', transactionController.add)
router.delete('/transaction/:id', transactionController.remove)

module.exports = router