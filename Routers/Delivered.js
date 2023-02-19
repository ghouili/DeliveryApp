const express = require('express');
const fileuploader = require('../MiddleWare/UploadFiles');
const DeliveredController = require('../Controllers/Delivered');
const route = express.Router();

// route.post('/images', fileuploader.array('images', 2), DeliveredController.saving_image);
route.post('/images', fileuploader.array('images', 4), DeliveredController.saving_image);

module.exports = route;
