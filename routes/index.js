var express = require('express');
const app = require('../app');
var router = express.Router();

const password1 = 'basil'
const email1= 'basil@gmail.com';




// Functions
function checkUser(email,password){
  console.log('checkuser');
  if(email == email1){
    if(password == password1){
      return true;
    }
  }

  return false;
}

/* GET home page. */
router.get('/login', function(req, res, next) {
  let arr = [{name:'a'},{name:'b'},{name:'c'}];
  res.render('login', { title: arr });
});

// Get login Details

router.post('/login',(req, res)=>{
  console.log('post');
  if(checkUser(req.body.email,req.body.password)){
    console.log('logged');
  }else{
    console.log('not logged');
  }
  console.log(req.body.password,req.body.email);
})




module.exports = router;
