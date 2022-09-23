var express = require('express');
const app = require('../app');
var router = express.Router();

const password1 = 'basil'
const email1= 'basil@gmail.com';




// Functions
function validateUser(email,password){
  console.log('checkuser');
  if(email == email1){
    if(password == password1){
      return true;
    }
  }

  return false;
}

// function checkUser(){
//   if(req.session.user){
//     next();
//   }else{
//     res.redirect('/login');
//   }
// }

/* GET home page. */
router.get('/',(req,res)=>{
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  if(req.session.user){
    res.render('index',{username: req.session.username})
  }else{
    res.redirect('/login');
  }
})


// login router
router.get('/login', function(req, res, next) {
  if(req.session.user){
    res.redirect('/');
  }
  res.render('login');
});

// logout router

router.get('/logout', function(req, res) {
  req.session.destroy();
  res.header('Cache-Control', 'no-cache');
  res.redirect('/login');
});

// Get login Details

router.post('/login',(req, res,next)=>{
  console.log('post');
  if(validateUser(req.body.email,req.body.password)){
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    req.session.user = true;
    req.session.username = req.body.email.split('@')[0]
    console.log(req.body.email.split('@')[0]);
    res.redirect('/');
  }else{
    console.log('not logged');
  }
  // console.log(req.body.password,req.body.email);
})




module.exports = router;
