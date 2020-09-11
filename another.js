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
   let searchFields;
        for(p in i){
            if(count>0){
                searchFields = searchFields+",";
            }
                searchFields=searchFields+"{"+[p]+":{$regex:\""+i[p]+"\"}}";
                console.log(p)
                console.log(i[p])
                count +=1;
             }
             count =0;

      let a = JSON.parse(searchFields);

    let searchField1=p,searchValue1=i[p];
    console.log(searchField1,searchValue1 );
    
    console.log(searchFields)

    const rows = await collection.aggregate([{$match :{ $and:[searchFields]}}]).toArray()
    console.log(rows);
    res.send(rows);
})
app.listen(3000 , ()=> console.log("3000"))
/* {searchField2:{$regex:'searchValue2'}}

,searchField2= p,searchValue2=i[p] 
*/

