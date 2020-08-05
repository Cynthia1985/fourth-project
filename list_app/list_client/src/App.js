
import React from 'react';
import Carousel from './components/Carousel.js'
import {Route, Link} from 'react-router-dom'
import Lists from './components/Lists.js'
import ListContainer from './components/ListContainer.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <nav>
          <Carousel />
          <Link className="logo" to="/">
              <h1>My List App</h1>
          </Link>
        </nav>
      </header>
      <Route exact path="/" component={Lists} />
      <Route path="/lists/:id" component={ListContainer} />
      <Footer />
    </div>
  );
}

export default App;
