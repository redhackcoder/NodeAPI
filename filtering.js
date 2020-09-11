var express = require('express')
var app = express();
var MongoClient = require('mongodb').MongoClient;
var BodyParser = require('body-parser')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))
MongoClient.connect("mongodb://127.0.0.1:27017")
  .then(client => {
    db = client.db('performance');
    dbClient = client;
    collection = db.collection('vishal');
    console.log("connection successfully")
  }).catch(error => console.error(error));
app.get("/apicol", async (req, res) => {
    let sortField="name",sortValue="Seas",searchField="ArticleCode",searchValue="382335";
    const rows = await collection.aggregate({$match :{ $and: [{[sortField]:{$regex:(`//b${sortValue}//b`)}}
     ]} }).toArray()
    console.log(rows);
    res.send(rows);
})
app.listen(3000 , ()=> console.log("3000"))