import React, { useState } from 'react';
import Nav from './components/Nav';
import Item1 from './components/Item#1';
import Item2 from './components/Item#2';
import Item3 from './components/Item#3';
import Item4 from './components/Item#4';
import Item5 from './components/Item#5';
import Item6 from './components/Item#6';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(
    "Item #1"
  );

  const switchPage = (page) => {
    switch (page) {
      case "Item#1":
        return <Item1></Item1>;
      case "Item#2":
        return <Item2 currentPage={currentPage}></Item2>;
      case "Item#3":
        return <Item3></Item3>;
      case "Item#4":
        return <Item4></Item4>;
      case "Item#5":
        return <Item5></Item5>;
      case "Item#6":
        return <Item6></Item6>;
  
      default:
        return <Item1></Item1>;
    };
  }

  return (
    <div className='wrapper'>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <div className="space">
      </div>
      <main>{switchPage(currentPage)}</main>
    </div>
  );
}

export default App;
