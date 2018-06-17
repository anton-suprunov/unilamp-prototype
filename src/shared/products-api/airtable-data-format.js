import values from 'lodash/values';

const MainProductCategoryField = 'ProductFamily1_ENG';

const prepareData = (data) => {
   let res = data.reduce(function (prev, cur) {
     prev[cur.node[MainProductCategoryField]] = prev[cur.node[MainProductCategoryField]] || {
       "title": cur.node[MainProductCategoryField],
       "shortTitle": cur.node[MainProductCategoryField],
       "new": false,
       "bgImage": cur.node["CardPhoto"][0].url,
       subProducts: []
     };

     prev[cur.node[MainProductCategoryField]].subProducts.push({
       article: cur.node.SKU,
       diameter: '1000 mm',
       width: '100 mm',
       "title": cur.node.SKUProductName,
       "power": "30W",
       "brightness": "3000 lm",
       "protection": "IP 44",
       "temperature": "3000 K",
       "features": cur.node.Features,
       "downloadLink": "",
       "manualLink": ""
     });

     return prev;
   }, Object.create(null));

   return values(res);
 }

 export default prepareData;