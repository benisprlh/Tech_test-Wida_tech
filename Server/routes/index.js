const InvoiceController = require('../controllers/invoiceController');

const router = require('express').Router();

router.post('/invoice', InvoiceController.createInvoice)
router.get('/invoice', InvoiceController.getInvoices)
router.get('/invoice-all', InvoiceController.getAllInvoices)

module.exports = router