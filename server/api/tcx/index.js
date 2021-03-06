var express = require('express');
var router = express.Router();
var controller = require('./controller')

if (process.env.NODE_ENV === 'development') {
    router.get('/test', controller.test);
}

router.post('/', controller.TcxString2Json);    // for Elm
router.get('/demo', controller.demo);
router.post('/tojson', controller.TCX2Json);
router.post('/fromjson/:fname', controller.Json2TcxFile);

module.exports = router;
