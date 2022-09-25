const express = require('express');
const app = require('../app');
const router = express.Router();

const password1 = 'basil'
const email1= 'basil@gmail.com';






function validateUser(req,res,next){
  if(req.body.email==email1 && req.body.password==password1){
    next()
  }else{
    req.session.message=true;
    res.redirect('/')
  }
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
  if(req.session.user){
    res.render('index',{username: req.session.username})
  }else{
    res.render('login',{"message":req.session.message});
    req.session.message=false;
   
  }
})


// login router
router.get('/login', function(req, res, next) {
 
    res.redirect('/');
 
});

// logout router

router.get('/logout', function(req, res) {
  req.session.destroy();
  res.header('Cache-Control', 'no-cache');
  res.redirect('/login');
});

// Get login Details

router.post('/login',validateUser,(req, res,next)=>{
  console.log('post');
    req.session.user = true;
    req.session.username = req.body.email.split('@')[0]
    res.redirect('/');

  // console.log(req.body.password,req.body.email);
})




module.exports = router;
