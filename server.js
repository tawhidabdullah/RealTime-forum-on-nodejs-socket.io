const express = require('express'); 
const hbs = require('hbs'); 
const expressHbs = require('express-handlebars'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose'); 

const app = express(); 




app.engine('.hbs',expressHbs({defaultLayout: 'layout', extname: '.hbs'}))
app.set('view engine','hbs'); 
app.use(express.static(__dirname ,'/public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(morgan('dev')); 
