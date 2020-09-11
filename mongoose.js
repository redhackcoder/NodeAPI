var express=require('express')
var MongoClient=require('mongodb').MongoClient
var app = express()
var db;
MongoClient.connect('mongodb://127.0.0.1:27017/performance',(err,client)=>{
 if(err) throw err
  db=client.db('performance')
 })
app.get('/',(req,res)=>{

db.collection('vishal').find({},{name:""}).toArray((err,result)=>{
     if(err) throw err
     res.send(result)
  })
})

app.listen(1400,()=>{
console.log('listening on 1400');
});