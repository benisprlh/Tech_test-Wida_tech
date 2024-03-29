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

    static async getInvoices(req, res, next) {

        const {page} = req.query

        let paramQuerySQL = {    
            attributes: ['id','customerName', 'salesPersonName', 'note'],
            include: {
                association: "SoldProducts",
                attributes: ['totalPrice'],
            },
            limit: 5,
            offset: 0,
            order: [['id', 'ASC']],
          };

          if (page) {
            let offset = page * 5 - 5;
            paramQuerySQL.offset = offset;
          }

        try {
            const AllData = await Invoice.findAndCountAll();
            const lengthData = AllData.count;
            const invoices = await Invoice.findAll(paramQuerySQL)
            return res.status(200).json({invoices, lengthData})
        } catch (error) {
            return res.status(500).json({msg: "Server Error"})
        }
    }

    static async getAllInvoices(req, res, next) {
        try {
            const invoices = await Invoice.findAll({
                attributes: ['dateOfInvoice'],
                include: {
                    association: "SoldProducts",
                    attributes: ['totalPrice'],
                    required: true
                },
                
            })
            return res.status(200).json(invoices)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = InvoiceController