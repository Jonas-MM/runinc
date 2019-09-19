import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Event from './components/Event/Event';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Shoes from './components/Shop/Shoes';

function App() {

  const [sko] = useState([
    { shoeimg: "/img/shoe_01.jpg", shoetxt: "Puma Highland 3000 - brown" },
    { shoeimg: "/img/shoe_02.jpg", shoetxt: "Asics Free Street" },
    { shoeimg: "/img/shoe_03.jpg", shoetxt: "New Balance Runner Bounce" },
    { shoeimg: "/img/shoe_04.jpg", shoetxt: "New Balance New York 2018" },
    { shoeimg: "/img/shoe_01.jpg", shoetxt: "Puma Highland 3000 - brown" },
    { shoeimg: "/img/shoe_02.jpg", shoetxt: "New Balance New York 2018" }
  ]);

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/event" component={Event} />
            <Route path="/shop" component={Shop}/>
            <Route path="/contact" component={Contact} />
          </Switch>


          {/* <skoListeProp={sko} /> */}
          {/* <div className="container d-flex">
          <Contact />
          <ContactForm />
        </div> */}

        </div>
        {/* <Shoes shoeListProp={sko} /> */}
      </BrowserRouter>
  );
}

export default App;
