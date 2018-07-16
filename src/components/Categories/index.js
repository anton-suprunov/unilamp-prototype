import React, { Component } from 'react'
import SortList from './SortList'

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeList: 'applications',
    };
  }

  onItemClick = (type, item) => {
    console.log(type, item.title);
    this.props.onCategorySelect(type, item.title);
  }

  onTitleClick = listName => {
    let activeList = '';
    if (this.state.activeList !== listName) {
      activeList = listName;
    }
    console.log(activeList);
    this.setState({
      activeList
    })
  }

  render() {
    const {
      categoriesList,
    } = this.props;

    const {
      activeList,
    } = this.state;
    
    return <div>
      <SortList 
        title="My Saved Products"
        list={[
          { key: "1", title: "saved 1" },
          { key: "2", title: "saved 2" },
        ]}
        isActive={activeList === 'saved_products'}
        onTitleClick={this.onTitleClick.bind(this, 'saved_products')}
      />

      <SortList 
        title="New Products"
        list={[
          { key: "1", title: "new 1" },
          { key: "2", title: "new 2" },
        ]}
        isActive={activeList === 'new_products'}
        onTitleClick={this.onTitleClick.bind(this, 'new_products')}
      />

      <SortList
        title="Product Categories"
        list={categoriesList.map(v => ({
          "key": v.replace(/ /g, '_'),
          "title": v
        }))}
        onClick={this.onItemClick.bind(this, 'category')}
        isActive={activeList === 'categories'}
        onTitleClick={this.onTitleClick.bind(this, 'categories')}
      />

      <SortList
        title="Product Applications"
        list={[
          { "key": "kitchen", "title": "Kitchen" },
          { "key": "outdoors", "title": "Outdoors" },
          { "key": "livingroom", "title": "Livingroom" },
          { "key": "bathroom", "title": "Bathroom" },
          {
            "key": "trade-housing", 
            "title": "Trade and Housing",
            "sublist": [
              { "key": "corridor", "title": "Korridor/Trapp" },
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
        onClick={this.onItemClick.bind(this, 'application')}
        onTitleSpecialClick={() => this.props.onCategorySelect('application')}
        isActive={activeList === 'applications'}
        onTitleClick={this.onTitleClick.bind(this, 'applications')}
      />
    </div>
  }
}

export default Categories;