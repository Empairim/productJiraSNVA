function viewProductBySlug(products, rl, mainMenu) {
  rl.question("Enter product slug: ", (slug) => {
    const product = products.find((prod) => prod.getSlug() === slug);
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

module.exports = viewProductBySlug;
