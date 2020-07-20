export default class ProductService {

  static getProductsByFilter(products, { name, category, manufacture, featured }) {
    let results = products;
    if (name && name.length) {
      const searchText = name.toLowerCase();
      results = results.filter(p => p.name.toLowerCase().includes(searchText));
    }

    if (category) {
      results = results.filter(p => p.category === category);
    }

    if (manufacture) {
      results = results.filter(p => p.manufacture === manufacture);
    }

    if (featured) {
      results = results.filter(p => p.featured === featured);
    }
    return results;
  }

  static getManufactures(products) {
    return [...new Set(products.map(p => p.manufacture))];
  }
}
