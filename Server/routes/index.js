const InvoiceController = require('../controllers/invoiceController');

const router = require('express').Router();

router.post('/invoice', InvoiceController.createInvoie)