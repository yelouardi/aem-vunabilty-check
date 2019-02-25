const fetch = require("node-fetch");
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
let status ;
// create a GET route
app.get('/express_backend', (req, res) => {
    console.log('Check  : ' + req.query.path);
    
    fetch(req.query.path)
    .then((response) =>{
            //console.log('Looks like there was a problem. Status Code: ' +response.body);
            //currentComponent.setState({code:404});
            return response.status;
        })
        .then((status) => {
            console.log('Response Of   : ' + req.query.path + ' Status : '+status);
            res.send({ express: status });
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
});