var express = require('express');
const morgan = require('morgan');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
})

router.post('/new', function(req, res, next) {
  const mssg = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }
  messages.push(mssg)
  res.redirect('/')
})

module.exports = router;
