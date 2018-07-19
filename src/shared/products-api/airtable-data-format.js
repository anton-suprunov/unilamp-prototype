import values from 'lodash/values';

const MainProductCategoryField = 'A_CardNameLive';

const prepareData = (data) => {
  //console.log(data);
  let res = data.reduce((prev, cur) => {
    //console.log(cur);
    let node = cur;

    if (!node[MainProductCategoryField]) {
      return prev;
    }

    prev[node[MainProductCategoryField]] = prev[node[MainProductCategoryField]] || {
      "title": node[MainProductCategoryField],
      "shortTitle": node[MainProductCategoryField],
      "new": false,
      "bgImage": node["A_CardPhoto"][0].url,
      subProducts: []
    };

    prev[node[MainProductCategoryField]].subProducts.push({
      article: node.A_SKU,
      category: node["A_Category"][0],
      application: node["A_Applications1"]  && node["A_Applications1"][0],
      diameter: '1000 mm',
      width: '100 mm',
      "title": node.Name_Original,
      "power": node.Power,
      "brightness": node.Brightness,
      "protection": node.Protection,
      "temperature": node.Temperature,
      "features": node.A_Features,
      "color": node.A_Color,
      "downloadLink": "",
      "manualLink": ""
    });

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