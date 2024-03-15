const {Invoice, SoldProduct} = require('../models')

class InvoiceController {

    static async createInvoice(req, res, next) {
        const {date, customerName, salesPersonName, paymentType, note, products} = req.body;
        try {
            if(products.length === 0){
                throw ({name: 'ProductsEmpty', message: "Product Is Required"})
            }
            const newInvoice = await Invoice.create({dateOfInvoice: date, customerName, salesPersonName, paymentType, note});
            const newProducts = products.map((el) => {
                const totalCogs = el.price;
                const totalPrice = el.price + (el.price * 0.2)

                return {item: el.productName, quantity: el.quantity, totalCogs, totalPrice, InvoiceId: newInvoice.id}
            })
            const addProducts = await SoldProduct.bulkCreate(newProducts)
            console.log(newInvoice, addProducts)
            return res.status(201).json({msg: "Create Invoice Success"})
        } catch (error) {
            if(error.name === 'SequelizeValidationError'){
                return res.status(400).json({msg: error.errors[0].message})
            }

            if(error.name === 'ProductsEmpty'){
                return res.status(400).json({msg: error.message})
            }

            return res.status(500).json({msg: "Server Error"})
        }
    }
}

module.exports = InvoiceController