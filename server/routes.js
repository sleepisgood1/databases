var controller = require('./controllers');
var router = require('express').Router();
router.use((req, res, next)=>{
  console.log('in router');
  next();
});
//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;


//index/messages/ users