import flatten from 'lodash/flatten'

export const filterProductsByFeature = (products, feature) => {
  let res = [];
  //console.log('filtering by', feature);

  products.map(product => {
    //let subProducts = flatten(product.subProducts);
    let subProducts = product.subProducts.slice(0);
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
    if (product.colors && product.colors.find(c => c === color)) {
      res.push(product);
    }
  });
  return res;
}

const parseWarmthValue = w => {
  w = w.toLowerCase()
        .replace('k', '')
        .trim();

  if (w.indexOf('-')) {
    w = w.split('-');
    return w.map(v => +v);
  }
  return +w;
}

export const filterProductByAttr = (products, filter) => {
  let res = [];
  //console.log(filter);
  
  if (filter.type === 'Warnth') {
    filter.value = parseWarmthValue(filter.value);
  }

  products.map(product => {
    //let subProducts = flatten(product.subProducts);
    let subProducts = product.subProducts.slice(0);
    let passed = false;

    passed = subProducts.some(s => {
      // skip brightness test for now as there are now samples in db output
      if (filter.type === 'Brightness') {
        return true;
      
      } else if (filter.type === 'Warmth') {
        let temp = +s['temperature'].replace('K', '');
        if (filter.value.isArray()) {
          return (filter.value[0] <= temp) && (temp <= filter.value[1])
        } else { 
          return temp === filter.value;
        }

      } else if (filter.type === 'Power' || filter.type === 'Size') {
        return true;

      } else {
        return s[filter.type] && s[filter.type] === filter.value;
      }
    });

    passed && res.push(product);
  });

  return res;
}