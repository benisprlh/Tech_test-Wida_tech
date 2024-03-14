const {Invoice} = require('../models')

class InvoiceController {

    static async createInvoice(req, res, next) {
        const {dateOfInvoice, customerName, salesPersonName, paymentType, note} = req.body;
        try {
            const newInvoice = await Invoice.create({dateOfInvoice, customerName, salesPersonName, paymentType, note});
            res.status(201).json(newInvoice)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = InvoiceController