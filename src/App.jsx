import React from 'react';
import './App.css';
import Card from './components/Card';
import data from './components/data.json'

function App() {

  return (
    <div className='cardContainer'>
      {data.map((item) => (
<Card key={item.name} {...item} />
))}
    </div>
  )
}

export default App
