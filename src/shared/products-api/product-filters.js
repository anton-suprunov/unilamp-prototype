import flatten from 'lodash/flatten'

export const filterProductsByFeature = (products, feature) => {
  let res = [];
  //console.log('filtering by', feature);

  products.map(product => {
    let subProducts = flatten(product.subProducts);
    let subProductsWithFeature = subProducts.filter(s => s.features && s.features.indexOf(feature) !== -1)

    if (subProductsWithFeature.length) {
      res.push(product);
    }
  });
  return res;
}

export const filterProductsByColor = (products, color) => {
  let res = [];

  products.map(product => {
    if (product.colors && product.colors.find(c => c.title === color)) {
      res.push(product);
    }
  });
  return res;
}

export const filterProductByAttr = (products, filter) => {
  let res = [];
  //console.log(filter);
  products.map(product => {
    let subProducts = flatten(product.subProducts);
    let passed = false;

    passed = subProducts.some(s => {
      if (filter.type === 'temperature' || filter.type === 'brightness' || filter.type === 'power') {
        return filter.value.indexOf(s[filter.type]) !== -1;
      } else {
        //console.log(s[filter.type]);
        return s[filter.type] && s[filter.type] === filter.value;
      }
    });

    passed && res.push(product);
  });

  return res;
}