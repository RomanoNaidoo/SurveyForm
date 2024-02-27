const express = require("express")
const mysql = require("mysql2")

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static("public"))


const con = mysql.createConnection({
host:"localhost",
user:"romano",
password:"secret",
database:"newdb",



})




app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/AdoptionSurvey.html")
  
})
app.post('/user',(req,res) => {
  const fullname = req.body.fullname;
   const email_address =req.body.email_address;
    const ref_no =req.body.ref_no;
     const hear_about = req.body.hear_about;
      const appeal =req.body.appeal;
      const reminders= req.body.reminders;
      const care_manual =req.body.care_manual; 
      const newsletter=req.body.newsletter;
      const extra_comments = req.body.extra_comments;
  console.log(req.body)
  
  con.query(
      "INSERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",[fullname, email_address, ref_no, hear_about, appeal, reminders, care_manual, newsletter, extra_comments],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send({ error: "Failed to save user" });
        } else {
          res.status(201).send({ id: results.insertId });
        }
      }
  );
    
  } 



 
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
