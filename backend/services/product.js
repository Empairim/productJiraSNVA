//class in this module for reusable data structure.
class Product {
  constructor(
    name,
    description,
    slug,
    image,
    gallery,
    price,
    sale_price,
    variations
  ) {
    this.name = name;
    this.description = description;
    this.slug = slug;
    this.image = image;
    this.gallery = gallery;
    this.price = price;
    this.sale_price = sale_price;
    this.variations = variations;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getSlug() {
    return this.slug;
  }

  getImage() {
    return this.image;
  }

  getGallery() {
    return this.gallery;
  }

  getPrice() {
    return this.price;
  }

  getSalePrice() {
    return this.sale_price;
  }

  getVariations() {
    return this.variations;
  }
}

module.exports = Product;
