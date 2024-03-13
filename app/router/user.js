const express = require('express');

const controller = require('../controllers/user');

const router = express.Router();

const path = 'user';



/**
 * se puede reemplazar `/${path}` por '/user'
 */
router.get(
    '/user', 
    controller.getData
)

module.exports = router