var express = require('express')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
let app = express();
app.use(bodyParser.json());

MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    db = client.db('performance');
    dbClient = client;
    collection = db.collection('vishal');
    console.log("connection successfully")
  }).catch(error => console.error(error));

app.get("/masterSearch", async(req , res) =>{
  console.log(req.body.name)
   let SearchValue = req.body.name;
   i=req.body.name;
   let a={"key":"/^"+SearchValue+"/"};
   
   console.log(SearchValue)
console.log("/"+SearchValue+"/")
  console.log(a.key)
   const rows = await collection.find({$or:[{name:a.key},{age:a.key}]}) .limit(10).toArray();
   console.log(rows);
   res.send(rows);

})
app.listen(3000, ()=> console.log("3000"))