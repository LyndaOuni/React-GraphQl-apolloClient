const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const  mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Port = 4000 ; 


// allow cross-origin requests
app.use(cors());
//connect to database mlab
mongoose.connect('mongodb://Lynda:test123@ds143893.mlab.com:43893/gql-lynda');
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
})
//middlware
app.use('/graph', graphqlHTTP({
    //schema graphql 
    schema,
    graphiql: true
}))
app.listen(Port, ()=>{
    console.log('now listening requests on port', Port );
});