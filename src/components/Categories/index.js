import React, { Component } from 'react'
import SortList from './SortList'

const Categories = () => {
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
      list={[
        { key: "1", title: "cat 1" },
        { key: "2", title: "cat 2" },
      ]}
    />
  </div>
}

export default Categories;