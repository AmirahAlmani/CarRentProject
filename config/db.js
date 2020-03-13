// Creating a base name for the MongoDB
const mongooseBaseName = 'carRent';
// Create the MongoDB URI for Development and Test
const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`,
}

//Identify if development enviroment is test or development
// select DB base om=n wether a test file was excuted before `se
const localDB = process.env.TESTENV ? database.test : database.development

//enviroment varible MONGODB_URL be avaialble in 
//Heoku production enviroment, otherwise use test or development
const currentDB = process.env.MONGODB_URL || localDB;


module.exports = currentDB