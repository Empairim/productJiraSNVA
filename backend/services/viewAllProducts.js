function viewAllProducts(products, mainMenu) {
  if (products.length === 0) {
    console.log("No products found.");
  } else {
    console.log("\nAll Products:");
    products.forEach((product) => {
      console.log(
        `Name: ${product.getName()}, Description: ${product.getDescription()}, Slug: ${product.getSlug()}, Price: ${product.getPrice()}, Sale Price: ${product.getSalePrice()}`
      );
    });
  }
  mainMenu();
}

module.exports = viewAllProducts;
