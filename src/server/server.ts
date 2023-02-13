import express from "express";
import cors from "cors"
const app = express()
app.use(cors())


let port = 3001
app.listen(port)
console.log(`listening http://localhost${port}`);


let posts = [
   { text: "Input text here" }
]

app.get('/api/posts', (req, res) => {
   res.status(200).json(posts)
})



