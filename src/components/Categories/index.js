import React, { Component } from 'react'
import SortList from './SortList'

class Categories extends Component {
  onCategoryClick = (item) => {
    this.props.onCategorySelect(item.title);
  }

  render() {
    const {
      categoriesList,
    } = this.props;
    
    return <div>
      <SortList 
        title="New Products"
        list={[
          { key: "1", title: "new 1" },
          { key: "2", title: "new 2" },
        ]}
      />

      <SortList 
        title="Applications"
        list={[
          { "key": "kitchen", "title": "Kitchen" },
          { "key": "outdoors", "title": "Outdoors" },
          { "key": "livingroom", "title": "Livingroom" },
          { "key": "bathroom", "title": "Bathroom" },
          {
            "key": "trade-housing", 
            "title": "Trade and Housing",
            "sublist": [
              { "key": "corridor", "title": "Corridor / Staircase" },
              { "key": "reception", "title": "Reception" },
              { "key": "office", "title": "Office and meeting rooms" },
              { "key": "subordinate", "title": "Subordinate room" }
            ]
          },
          { "key": "smarthome", "title": "Smarthome" },
          { "key": "other", "title": "Other" }
        ]}
        activePath={[
          'trade-housing',
          'corridor'
        ]}
      />

      <SortList
        title="Categories"
        list={categoriesList.map(v => ({
          "key": v.replace(/ /g, '_'),
          "title": v
        }))}
        onClick={this.onCategoryClick}
      />
    </div>
  }
}

export default Categories;