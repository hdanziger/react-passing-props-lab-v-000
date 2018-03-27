import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback, handleChange}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleChange} />
      <FilteredFruitList
        filter={currentFilter} />
    </div>
  )
}


FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  handleChange: function() {},
  updateFilterCallback: function() {}
}

export default FruitBasket;
