// routes/index.js

const router = require('express').Router();

//
// Our routes :
//

router.get('/', (req, res, next) => {
  res.render('some page renders here');
});

module.exports = router;

