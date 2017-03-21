import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAQoUx6fA4Hsfp_srveQZLo2yDEqpiz4wI"

// Create a new component. This companent should produce
// some HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this componenet's HTML and put
// it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
