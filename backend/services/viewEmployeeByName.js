function viewProductByName(products, rl, mainMenu) {
  rl.question("Enter product name: ", (name) => {
    const product = products.find(
      (prod) => prod.getName().toLowerCase() === name.toLowerCase()
    );
    if (product) {
      console.log(
        `Name: ${product.getName()}, Description: ${product.getDescription()}, Slug: ${product.getSlug()}, Price: ${product.getPrice()}, Sale Price: ${product.getSalePrice()}`
      );
    } else {
      console.log("Product not found.");
    }
    mainMenu();
  });
}

module.exports = viewProductByName;
