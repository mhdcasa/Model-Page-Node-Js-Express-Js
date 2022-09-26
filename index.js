'use strict'

// import le Paquet Express
const express = require('express')

// Creation une application express 
const app = express() 
const port = 3000

let generateModel = require('./pages/page-get.js')
// Importer la logique du page Index
// let pageAccueilTemplate = require('./pages/index-get.js')
app.get('/', async(req, res) => {
    const INDEX_CONTENU = await generateModel('index');
    res.send(INDEX_CONTENU);
})


// Importer la logique du page Contact

app.get('/contact', async(req, res) => {
    const CONTACT_CONTENU = await generateModel('contact');
    res.send(CONTACT_CONTENU);
})


// Ecoute les requettes du répertoire '/style/xx'
// Et associé les au repertoire donné

// app.use('/css', express.static('C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/createBackEndNodeJs/SIteMorgan/css'))
app.use('/css', express.static('C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/ExpressJs/Model-Page-Node-Js-Express-Js/SIteMorgan/css'))
app.use('/img', express.static('C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/ExpressJs/Model-Page-Node-Js-Express-Js/SIteMorgan/img'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})