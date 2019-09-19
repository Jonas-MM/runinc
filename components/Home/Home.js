import React from 'react'
import Header from './Header'
import Event from '../Event/Event'
import Shop from '../Shop/Shop'
import Contact from '../Contact/Contact'


const Home = () => {
    return ( 
        <div className="container">
            <Header />
            <Event />
            <Shop />
            <Contact /> 
        </div>

     );
}
 
export default Home;

