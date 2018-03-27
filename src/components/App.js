import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFruit;
    this.fetchFilters;
  }

  fetchfilteredFruitList = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruits => this.setState({ fruits }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render() {
    return(
      <div></div>
    )
    // render <filteredFruitList filteredFruitList={this.state.fruits} />
    // render <Filters filters={this.state.filters} />
  }
}

export default App;
