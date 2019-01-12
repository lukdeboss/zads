
const fs = require('fs');



module.exports = {


//========================================
//========================================
//========================================
   zadTest: (req, res) => {
          res.render('jsonf.ejs', {
            title: "Church Invoicing | ClientPage"
          });
   },

//========================================


    setup: (req, res) => {
       res.send("to jest odpowiedz na saetup");
    },


//========================================


    zadPost: (req, res) => {
        let pid = req.params.id;
        let name = req.body.name;
        let internal_note = req.body.internal_note;

        let query = "UPDATE `products` SET `name` = '" + name + "', `internal_note` = '" + internal_note + "' WHERE products.pid = " + pid ;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/products');
        });
    },

//========================================

glowna: (req, res) => {

       let query = "select zakoncz,nr,typp,temat from zadania order by zakoncz";
       db.query(query, (err, result) => {
          if (err) {
             res.redirect('/error21');
          }
          console.log("7649 lista select");

          res.render('glowna.ejs', {
             title: "zadania"
             ,results: result
         });
     });
   },

//=======================================


   jsonf: (req, res) => {
          res.render('jsonf.ejs', {
            title: "Church Invoicing | ClientPage"
          });
   },

// -----------------------------------

    // pobiera info i tworzy div do faktury


    getProductInfo: (req, res) => {


        let pid = req.params.id;
        let query_prod  = "select pid,name from products  where pid = " + pid ;
        let query_feat  = "select * from product_features  where pid = " + pid ;

        db.query(query_prod, (err, result_prod) => {
          if (err) {
            res.redirect('/error1');
          }
        console.log("e60098 product info: " + result_prod );
        result_prd = result_prod;
        });



        db.query(query_feat, (err, result) => {
          if (err) {
            res.redirect('/error2');
            console.log("e60097 error: " + err );
          }
          res.render('product-div.ejs', {
            title: "Church Invoicing | ClientPage"
            ,message: ''
            ,features: result
            ,products: result_prd
          });
        });
    },


// -----------------------------------
    addClientPage: (req, res) => {
        res.render('add-client.ejs', {
            title: "Church Invoicing | ClientPage"
            ,message: ''
        });
    },

// -----------------------------------






    showProductsPage: (req, res) => {
   
        let query = "SELECT * FROM `products` ORDER BY name ASC"; // query database to get all the players
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }

            res.render('products.ejs', {
                title: "Welcome to Socka | View Players"
                ,products: result
            });
        });
    },














    newProductPage: (req, res) => {
            res.render('add-product.ejs', {
                title: "Welcome to Socka | View Players"
                ,message: ''
            });
    },


    productsAddPage: (req, res) => {
        let message = '';
        let name = req.body.product;
        let internal_note = req.body.internal_note;
        console.log("name produktu " + name );
        let usernameQuery = "SELECT * FROM `products` where name = '" + name + "'";
        console.log("aaaaa");
        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
        console.log("bbbb");
            if (result.length > 0) {
                message = 'Product already exists';
                res.render('add-product.ejs', {
                    message,
                    title: "products | Add"
                });
        console.log("ccccc");
            } else {


        console.log("ddddd");
                        let query = "INSERT INTO `products` (name, internal_note) VALUES ('" + name + "', '" + internal_note + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/products');
                        });

        console.log("eeee");


                   // res.render('add-product.ejs', {
                   //     message: '' ,
                   //     title: "products | Add2"
                   //  });
          
        console.log("fff");
            }
        });
    },

    editProductPage: (req, res) => {
        let pid = req.params.id;
        console.log('e8365 editProductPage pid: ' + pid );
        let query = "SELECT * FROM `products` WHERE pid = " + pid ;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log('e8366 editProductPage product: ' + result );
            console.log('e8366 editProductPage product[0]: ' + result[0] );
            res.render('edit-product.ejs', {
                title: "Edit  Product"
                ,product: result[0]
                ,message: ''
            });
        });
    },

    editProduct: (req, res) => {
        let pid = req.params.id;
        let name = req.body.name;
        let internal_note = req.body.internal_note;

        let query = "UPDATE `products` SET `name` = '" + name + "', `internal_note` = '" + internal_note + "' WHERE products.pid = " + pid ;
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/products');
        });
    },

    deletePlayer: (req, res) => {
        let playerId = req.params.id;
        let getImageQuery = 'SELECT image from `players` WHERE id = "' + playerId + '"';
        let deleteUserQuery = 'DELETE FROM players WHERE id = "' + playerId + '"';

        db.query(getImageQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let image = result[0].image;

            fs.unlink(`public/assets/img/${image}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            });
        });
    }
};

