const express = require('express');
//import exp from 'constants';
//import*as express from 'express';

const PORT =3000;
const app = express();
app.use( express.json() );

app.get('/', (req, res) =>{
    res.status(200).send('Hollo from express 5555');
});
app.post('/:id',(req, res) =>{
    const {id} = req.params;
    const {name,surname}= req.body;
    console.log(`name :${name},surname: ${surname},id: ${id}`)
    res.status(200).send("POST method");
})

app.listen(PORT, () =>{
    console.log(`Server listen on http:// localhost:${PORT}`);
});