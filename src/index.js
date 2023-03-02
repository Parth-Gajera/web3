import React from 'react';
import  ReactDOM  from 'react-dom';
import './App.css';
import Card from './components/Cards';

ReactDOM.render(
<>
<h1 className="heading_style">Top Netflix Web-Series</h1>
  <Card
    imgsrc="https://wallpapercave.com/w/wp10339821.jpg"
    title=" A Netflix Original Series"
    sname="Stranger Things"
    link="https://www.netflix.com/in/"
  />

<Card
    imgsrc="https://wallpapercave.com/w/wp5993832.png"
    title=" A Netflix Original Series"
    sname="Money Heist"
    link="https://www.netflix.com/in/"
  />

<Card
    imgsrc="https://wallpapercave.com/w/wp9254857.jpg"
    title=" A Netflix Original Series"
    sname="Lucifer"
    link="https://www.netflix.com/in/"
  />

<Card
    imgsrc="https://wallpapercave.com/w/wp11764653.jpg"
    title=" A Netflix Original Series"
    sname="Wednesday"
    link="https://www.netflix.com/in/"
  />

<Card
    imgsrc="https://wallpapercave.com/w/wp9932803.png"
    title=" A Netflix Original Series"
    sname="Squad Game"
    link="https://www.netflix.com/in/"
  />
  
  <Card
    imgsrc="https://wallpapercave.com/w/wp9932803.png"
    title=" A Netflix Original Series"
    sname="Squad Game"
    link="https://www.netflix.com/in/"
  />
</>,
document.getElementById('root')
);