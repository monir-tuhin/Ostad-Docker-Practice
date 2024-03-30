const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.end("Hello world");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
