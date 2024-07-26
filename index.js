const express=require('express');
const app=express();

app.use(express.json())
const PORT=8080;
app.listen(
    PORT,
    ()=>console.log(`it's alive on https://localhost:${PORT}`)
);
app.get('/tshirt',(req,res)=>{
 res.status(200).send({
    tshirt:'t',
    size:'large',
 })
});

app.post('/tshirt/:id',(req,res)=>{
    const {id}=req.params;
    const {logo}=req.body;
    if(!logo){
        res.status(418).send({message:'we need a logo!'});
    }
    res.send({
        tshirt:`t with your ${logo}`,
    });
});
