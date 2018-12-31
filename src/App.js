import React, { Component } from 'react';
import Card from './components/CompuntComponentBuild';
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









/**** Desitred API ****

<Card key={item.id}>
  <div style={{ padding: '15px' }}>
    <Card.Title>{item.title}</Card.Title>
    <Card.Description trunc={3}>{item.plot}</Card.Description>
    <Card.SubTitle>{subTitle}</Card.SubTitle>
    <Card.Meta>{meta}</Card.Meta>
    <Card.Marker />
  </div>
  <Card.Seperator />
  <Card.Poster src={item.posterUrl} alt={item.title} />
</Card>

********/