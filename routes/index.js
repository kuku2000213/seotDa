var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/seotDa", async (req, res) => {

  res.render('seotDa');
})

module.exports = router;
