const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const adminController = require('../controller/admin');
// const Staff = require('../models/staff');
// const Acc = require('../models/user');
// mongoose.connect('mongodb+srv://group1:password@cluster0.x52v4.mongodb.net/Application?retryWrites=true&w=majority')
router.post('/login', (req, res)=>{
    res.render('admin')
});

router.get('/admin', (req, res)=>{
    res.render('admin');
})

router.get('/admin/adminAddStaff', adminController.getAddStaff);

router.post('/doAddStaff', adminController.addStaff);

router.get('/admin/adminEditStaff', adminController.editStaff);

router.post('/admin/adminEditStaff/doEditStaff', adminController.updateStaff);

router.get('/admin/adminViewStaff', adminController.viewStaff);

router.get('/admin/adminDeleteStaff', adminController.deleteStaff);

module.exports = router;