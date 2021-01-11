const express = require('express');
const subscriberRoute = require('./src/route');

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json()); 

// Routes
app.use('/', subscriberRoute);


app.listen(PORT,() => {
    console.log(`server is listening on PORT ${PORT}`);
})

module.exports = app;