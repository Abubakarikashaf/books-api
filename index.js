const express=require("express")
const dotenv=require("dotenv")
const results=require("./results")
dotenv.config();
const app = express();
//middleware
app.use(express.json())

//route
app.get("/", (req, res) =>{
    res.send("welcome to our portal")
})
//get all results

app.get("/results", (req, res) => {
    res.json(results)
});

// post result
app.post("/results/add//",(req, res) => {
    const student = {
        name: req.body.name,
        class: req.body.class,
        grade: req.body.grade
    };
    results.push(student);
    res.json(student)
})



const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>
     console.log("server is running on ${PORT}"))


     