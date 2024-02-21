const express = require('express');
const router = express.Router();
const { fetchuser } = require('../middleware/fetchUser')
const { createportfolio, fetchall, adddocuments, rating, dashboard } = require('../controllers/Portfoliocontroller')

// To create dashboard of the person
router.post('/createportfolio', fetchuser, createportfolio);
router.get('/dashboard', fetchuser, dashboard);
router.get('/fetchall', fetchuser, fetchall);
router.put('/rate/:id', rating);
router.put('/adddocuments', fetchuser, adddocuments)


module.exports = router