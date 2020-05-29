const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );


const users = [
    {firstName: "Reimu", lastName: "Harkurei"},
    {firstName: "Marisa", lastName: "Kirisame"},
    {firstName: "Sanae", lastName: "Kochiya"},
    {firstName: "Sakuya", lastName: "Izayoi"},
    {firstName: "Momiji", lastName: "Inubashiri"},
];


app.get("/api", (req, res) => {
    res.json({ message: "Hello world. Hows it going?"});
});

app.get("/api/users", (req, res) => {
    res.json( users );
});

app.post("/api/users", (req, res) => {
    //req.body will contain form data from Postman or
    //from React
    console.log(req.body);

    users.push(req.body);

    res.json( {status: "ok"} );
});

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);

    res.json( users[req.params.id] );
});

app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;

    users[id] = req.body;

    res.json( { status: "ok"} );
});

app.put("/api/users/:id", (req, res) => {
    //get this  `id` variable from req.params
    const id = req.params.id;
    users.splice(id, 1);

    res.json( { status: "ok"} );
});






app.listen( port, ()=> console.log(`Listening on port: ${port}`) );
