var express = require('express');
var router = express.Router();

const credintial = {
    username :'admin@gmail.com',
    password : 'admin916'
}
//login user 


router.post('/login',(req,res)=>{
if(req.body.username === credintial.username && req.body.password === credintial.password){
    req.session.user = req.body.username;
    res.redirect('/route/home');
    // console.log(req.session.user);
    // res.end('loggin successfull')
}else{
    // res.redirect('/')
    res.redirect('/?message2=a%20message');
}
})

router.get('/home',(req,res)=>{
    if(req.session.user){
        res.render('home',{user:req.session.user})
        console.log(req.session);
    }else{
        res.send('unauthorize user')
    }
})

//rout for logout
router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send('error');   
       }else{
           res.render('index',{message1:'logout successfully..'})
       }
    })
})
module.exports = router;