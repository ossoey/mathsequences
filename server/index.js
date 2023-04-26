const express = require('express');
const path = require('path');
const app = express();
const routes = require("./config/route");

//deobogue
app.use((req, res, next) => {
  //console.log(`Received request for ${req.url}`);
  next();
});

 

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

 
// Mount the routes to the application
app.use('/api', routes);



const port = 3000; // or any other port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


 
 






