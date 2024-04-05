const express = require("express");
const cors = require("cors");

const app = express();
//backend port
var corOptions  = {
    origin : "https://localhost:8081"
}

app.use(cors(corOptions));

//การขออนุญาต
app.use(express.json());
//รับส่งข้อมูล
app.use(express.urlencoded({extended:true}));

app.get("/", (rep, res) => {
    res.json({ message: "Hello world"});
});

//fontend port
const PORT = 8080;
app.listen(PORT, () =>{
    console.log("Server is runing on PORT: " + PORT);
});
