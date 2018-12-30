import React, { Component } from 'react';
import Card from './components/Card';
import items from './items';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cards-list">
          {
            items.map(item => {
              const subTitle = `Genres: ${item.genres.join(', ')}`;
              const meta = `Director: ${item.director}`;
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subTitle={subTitle}
                  meta={meta}
                  description={item.plot}
                  imageUrl={item.posterUrl}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
