const express = require('express');
const {MongoClient} = require('mongodb');
const debug = require('debug')('app:listRoutes');

const adminRoute = express.Router();

const list ={
    {
        employee name: 'Mr. James Asamoah',

    },
    {
        employee name: 'Mr.Raymond Ansah',
    },
    {
        employee name: 'Mrs. Rebecca Aframa',
    },
    {
        employee name: 'Mrs. Helena Amoah',
    },
























};
function router(nav){
    adminRoute.route('/')
    .get((req, res) =>{
        const url= 'mongodb://localhost:27017';
        const dbName= 'employee db';
        (async function mongo() {
            let client;
            try{
                client= await MongoClient.connect(url);
                debug('connected successfully');
                const db= client.db(dbName);
                const response = await db.collection('todo').insertMany(list);
                res.json(response);
             } catch (err) {
               debug(err. stack);
             }
             client.close();
            }());
        });
        return adminRoute;
}

module.exports= router;
