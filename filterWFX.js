var express = require('express')
var app = express();
var MongoClient = require('mongodb').MongoClient;
var BodyParser = require('body-parser')
var i, cd,key,p;
const bodyParser = require('body-parser')
app.use(express.json());
app.use(bodyParser.json());


var count =0;
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    db = client.db('performance');
    dbClient = client;
    collection = db.collection('vishal');
    console.log("connection successfully")
  }).catch(error => console.error(error));
app.post("/apicol", async (req, res) => {
  console.log(req.body)
   i=req.body;
   let searchFields="";
 

        for(p in i){
            
                console.log(p)
                console.log(i[p])
               
             }
             
      

     let columnName=p,Value=i[p],searchField2=" ",searchValue2="";
    console.log(columnName,Value );

    console.log(searchFields)
    const rows = await collection.aggregate([{$project:{_id:0, name:1, age:1}},{$sort:{[columnName]:Value}}]).toArray()
    console.log(rows);
    res.send(rows);
   
})
app.listen(3000 , ()=> console.log("3000"))
