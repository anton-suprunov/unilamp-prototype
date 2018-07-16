import airtable from 'airtable';
import map from 'lodash/map';

const fetch = (baseId, baseName, tableView) => {
  return new Promise((resolve, reject) => {
    let res = [];

    airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: '',
    });

    var base = airtable.base(baseId);

    base(baseName).select({
      view: tableView
    }).eachPage(function page(records, fetchNextPage) {
      res = res.concat(map(records, 'fields'));
      fetchNextPage();
    }, err => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  }) 
}

export default fetch;