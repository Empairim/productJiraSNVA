// var express = require("express");
// const addProduct = require("../services/addProduct");

// var router = express.Router();

// /* POST add product. */
// router.post("/addProduct", function (req, res, next) {
//   const product = req.body;
//   const data = addProduct(product);
//   res.send(JSON.stringify(data));
// });

// module.exports = router;
var express = require("express");
const { addProduct } = require("../services/addProduct");

var router = express.Router();

/* POST add product. */
router.post("/addProduct", function (req, res, next) {
  console.log("Request received to add product:", req.body);
  let product = req.body;
  try {
    const data = addProduct(product);
    console.log("Product added successfully:", data);
    res.send(JSON.stringify(data));
  } catch (error) {
    console.error("Error while adding product:", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
