
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {setup,glowna,zadPost} = require('./routes/zad');
const {getHomePage} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const {addClientPage, addClient, clientsPage, editClientForm, updateClient, getClientInfo} = require('./routes/client');
const {jsonf, showProductsPage, getProductInfo, productsPage, productsAddPage, newProductPage, editProductPage, editProduct} = require('./routes/products');
const {testGet, testPost, addtext} = require('./routes/test');
const {newInvoice,addingInvoice} = require('./routes/invoices');
const {showProdFeatures, featureAddPage, featureSave,editFeaturePage,editFeature} = require('./routes/features');
const port = GIKRGHBNFI;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({

    host: 'AtRGBU734G',
    user: 'GTHGONFKE3',
    password: 'BIRJGODKEV',
    database: 'BORPGJD3N3'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;


// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


// routes for the app

app.get('/zad', glowna);
app.get('/setup', setup);
app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/jsonf', jsonf);
app.get('/addtext', addtext);
app.get('/client/add', addClientPage);
app.get('/client/info/:id', getClientInfo);
app.get('/product/info/:id', getProductInfo);
app.get('/client', clientsPage);
app.get('/test', testGet);
app.post('/test', testPost);
app.post('/zad', zadPost);
app.get('/products', showProductsPage);
app.get('/products/add', newProductPage);
app.get('/products/edit/:id', editProductPage);
app.get('/feature/edit/:id', editFeaturePage);
app.get('/client/edit/:id', editClientForm);
app.get('/products/feat', showProdFeatures);
app.get('/feature/add/:id', featureAddPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.get('/invoice/add', newInvoice);
app.post('/zadtest', zadTest);
app.post('/invoice/add', addingInvoice);
app.post('/add', addPlayer);
app.post('/products/add', productsAddPage);
app.post('/feature/edit/:id', editFeature);
app.post('/products/edit/:id', editProduct);
app.post('/feature/add/:id', featureSave);
app.post('/client', clientsPage);
app.post('/client/add', addClient);
app.post('/client/edit/:id', updateClient);
app.post('/edit/:id', editPlayer);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


