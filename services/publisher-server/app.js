const express = require('express');
const publisherRoute = require('./src/route');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); 

// Routes
app.use('/', publisherRoute);


app.listen(PORT,() => {
    console.log(`server is listening on PORT ${PORT}`);
})