const { Balance } = require('../models')

class TransactionController {
    static async showAll(req, res) {
        try {
            const transactions = await Balance.findAll({
                order: [['id', 'DESC']]
            })
            res.status(200).json(transactions)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add(req, res) {
        try {
            const {text, amount} = req.body
            const newTransaction = await Balance.create({text, amount})
            res.status(201).json(newTransaction)
        } catch (err) {
            res.status(400).json(err, "Bad Request")
        }
    }

    static async remove(req, res) {
        const { id } = req.params
        try {
            const transaction = await Balance.findByPk(+id)
            if(transaction) {
                await Balance.destroy({where: {id} })
                res.status(200).json({ messsage:"Transaction has been removed successfully" })
            }
        } catch (err) {
            res.status(404).json({message: "Not Found"})
            console.log(err)
        }
    }
}

module.exports = TransactionController