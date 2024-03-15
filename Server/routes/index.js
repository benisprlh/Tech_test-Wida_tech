const InvoiceController = require('../controllers/invoiceController');

const router = require('express').Router();

router.post('/invoice', InvoiceController.createInvoice)
router.get('/invoice', InvoiceController.getInvoices)

module.exports = router