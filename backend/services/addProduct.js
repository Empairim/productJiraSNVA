const Product = require("./product.js");
const fs = require("fs");
const path = require("path");

products = [];

function allProducts() {
  return products;
}

function saveProductData(product) {
  const folderPath = path.join(__dirname, "productData");
  const filePath = path.join(folderPath, "products.json");

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }

  const jsonBytes = fs.readFileSync(filePath);
  let products = JSON.parse(jsonBytes);
  products.push(product);

  fs.writeFile(filePath, JSON.stringify(products), (error) => {
    if (error) {
      console.log("Error saving product data: ", error);
    } else {
      console.log(
        `Product with slug ${product.getSlug()} has been added and saved.`
      );
      console.log(`Product data has been saved to: ${filePath}`);
    }
  });
}

function isValidString(value) {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(value);
}

function isValidNumber(value) {
  return !isNaN(value) && value > 0;
}

function addProduct(product) {
  const {
    name,
    description,
    slug,
    image,
    gallery,
    price,
    sale_price,
    variations,
  } = product;

  console.log("Product received:", product);

  if (
    !isValidString(name) ||
    !isValidString(description) ||
    !isValidString(slug)
  ) {
    throw new Error(`Cannot save invalid ${name} ${description} ${slug}`);
  }

  console.log("Creating new product object...");

  const newProduct = new Product(
    name,
    description,
    slug,
    image,
    gallery,
    price,
    sale_price,
    variations
  );
  products.push(newProduct);

  console.log("Saving product data to file...");

  saveProductData(newProduct);

  console.log("Product added successfully:", newProduct);

  return products;
}
console.log("addProduct function is exported from addProduct.js");

module.exports = {
  addProduct,
  allProducts,
};
