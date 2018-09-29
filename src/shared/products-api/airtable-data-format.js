import values from 'lodash/values';

const MainProductCategoryField = 'A_CardNameLive';

const productGroupKey = key => {
  return key.replace(/\s/g, '_').toLowerCase().trim();
};

const prepareData = (data) => {
  //console.log(data);
  
  let res = data.reduce((prev, node) => {
    //console.log(node);

    if (!node[MainProductCategoryField]) {
      return prev;
    }

    prev[node[MainProductCategoryField]] = prev[node[MainProductCategoryField]] || {
      "title": node[MainProductCategoryField],
      "shortTitle": node[MainProductCategoryField],
      "new": false,
      "bgImage": node["A_CardPhoto"][0].url,
      subProducts: [],
      colors: [],
      images: {},
      isNew: false,
      description: node['A_ProductFamilyDescription_ENG'],
      key: productGroupKey(node[MainProductCategoryField])
    };


    prev[node[MainProductCategoryField]].subProducts.push({
      article: node.A_SKU,
      
      //category: getCategory(node["A_Category"][0], categories),
      category: node["category_name"][0],
      categoryKey: node["category_name"][0].replace(/ /g, '_'),
      
      //application: node["A_Applications1"] && node["A_Applications1"][0],
      application: node["application_name"] ? node["application_name"][0] : "",
      applicationKey: node["application_name"] ? 
        node["application_name"][0].replace(/ /g, '_').replace(/\//g, '_') : "",

      diameter: '1000 mm',
      width: '100 mm',
      size: node.Size,
      "title": node.Name_Original,
      "power": node.Power,
      "brightness": node.Brightness,
      "protection": node.Protection,
      "temperature": node.Temperature,
      "features": node.A_Features,
      "color": node.A_Color && node.A_Color[0],
      "downloadLink": "",
      "manualLink": "",
      "image": node["A_CardPhoto"][0].url,
    });

    if (node.A_Color && node.A_Color.length) {
      if (prev[node[MainProductCategoryField]].colors.indexOf(node.A_Color[0]) === -1) {
        prev[node[MainProductCategoryField]].colors.push(node.A_Color[0]);
        prev[node[MainProductCategoryField]].images[node.A_Color[0].toLowerCase()] = node["A_CardPhoto"][0].url;
      }
    }

    if (node.A_New) {
      prev[node[MainProductCategoryField]].isNew = true;
    }

    return prev;
  }, Object.create(null));

  return values(res);
}

export default prepareData;

export const extractCategories = (data) => {
  return data.reduce((r, cur) => {
    if (!cur['A_Category']) {
      return r;
    }

    let cat = cur['A_Category'][0];

    if (r.indexOf(cat) === -1) {
      r.push(cat);
    }

    return r;
  }, [])
}