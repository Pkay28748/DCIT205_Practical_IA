const express = require('express')
const mongoose =require('mongoose')
const patient= express();

patient.use(express.json())

mongoose.connect(

).then(()=>{
    console.log('mongodb has connected');

});

patient.all('/test/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

patient.listen(3000,()=>(
    console.log('server is running' )
)

)
