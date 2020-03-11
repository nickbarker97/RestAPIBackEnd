var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var Contact = require('./models/Contact')

var port= 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    console.log('Connected to DB')
})
.catch(err =>{
    console.log('Not Connected to DB')
})


app.get('/', (req, res)=>{
    res.send('Submit Successful')
});

app.get('/about', (req, res)=>{
    res.send('This is the About page')
});

app.get('/contact', (req, res)=>{
    res.send('This is the contact page')
});

app.post('/api/addContact', (req, res)=>{
    const { name, email, number } = req.body;

    let contact = new Contact({
        name,
        email,
        number
    });

    contact.save();
    
    const requestURL = req.get('origin');
    res.redirect(requestURL);
});

app.get('/api/getContact', cors(), (req, res)=> {
    Contact.find({}, (err, docs) =>{
        res.json(docs);
})
});
//Listening for request on port 3000
app.listen(port,() => {
    console.log('Server listening on port 3000');
});