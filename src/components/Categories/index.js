import React, { Component } from 'react'
import { navigateTo } from "gatsby-link"
import isEqual from 'lodash/isEqual'

import SortList from './SortList'

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeList: 'applications',
    };
  }

  componentDidMount() {
    this.updatePaths();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props, prevProps)) {
      this.updatePaths(); 
    }
  }

  updatePaths = () => {
    let paths = this.getPaths();
    let path = paths[0];

    if (path === 'category') {
      path = 'categories';
    }

    if (path === 'application') {
      path = 'applications';
    }

    if (paths.length && this.state.activeList !== paths[0]) {
      this.setState({
        activeList: path,
      });
    }
  }  
  
  getPaths = () => {
    let paths = [];
    let pathname = this.props.location.pathname.replace('/unilamp-prototype', '');

    paths = pathname.split('/').slice(1);
    if (paths.length === 1 && paths[0].length === 0) {
      return ['application', 'Korridor_Trapp'];
    }

    return paths;
  }

  prepareApplications = (list) => {
    return list.reduce((res, item) => {
      let temp = {
        "key": item['Name'].replace(/ /g, '_').replace(/\//g, '_'),
        "title": item['Name'],
      };

      if (item['parent_application']) {
        let parentIndex = res.findIndex(i => i['title'] === item['parent_application']);
        res[parentIndex].sublist = res[parentIndex].sublist ? res[parentIndex].sublist : [];
        res[parentIndex].sublist.push(temp);
        return res;
      }

      res.push(temp);
      return res;

    }, []);
  }

  onItemClick = (type, item) => {
    this.props.onCategorySelect(type, item.title);
  }



  onTitleClick = listName => {
    let activeList = '';
    if (this.state.activeList !== listName) {
      activeList = listName;
    }
    this.setState({
      activeList,
    })
  }

  render() {
    const {
      categories = [],
      applications = [],
    } = this.props;

    const {
      activeList,
    } = this.state;

    let paths = this.getPaths();
    let applicationsList = this.prepareApplications(applications);

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
        list={categories.map(v => ({
          "key": v.Name.replace(/ /g, '_'),
          "title": v.Name,
        }))}
        //onClick={this.onItemClick.bind(this, 'categories')}
        isActive={activeList === 'categories'}
        onTitleClick={this.onTitleClick.bind(this, 'categories')}
        onTitleSpecialClick={() => navigateTo('/categories')}
        linkTo={'category'}
        activePath={(paths[0] === 'category') ? paths.slice(1) : []}
      />

      <SortList
        title="Product Applications"
        list={applicationsList}
        activePath={(paths[0] === 'application') ? paths.slice(1) : []}
        //onClick={this.onItemClick.bind(this, 'application')}
        //onTitleSpecialClick={() => this.props.onCategorySelect('application')}
        onTitleSpecialClick={() => navigateTo('/applications')}
        isActive={activeList === 'applications'}
        onTitleClick={this.onTitleClick.bind(this, 'applications')}
        linkTo={'application'}
      />
    </div>
  }
}

export default Categories;