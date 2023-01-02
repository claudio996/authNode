const express = require('express')
const app = express();
const router = require('./routes/router')
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended:false}))


app.use(express.static(path.join(__dirname, '/public')))
app.use('/', router)

app.listen(3000 , () => {
    console.log('server is running');
})

