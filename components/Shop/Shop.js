import React  from 'react'
import '../../App.css';
import Brands from './Brands';
import Shoes from './Shoes';


const Shop = (props) => {

    // let shoesList = props.shoeListProp.map(
    //     c => {
    //         return (
    //             <div className="container">
    //                 <img src={c.shoeimg} alt=""/>
    //                 <p>{c.shoetxt}</p>

    //             </div>
    //         );
    //     }
    // )

    return (
        <div id="event" className="container d-flex">
            <Brands />
            <Shoes />

        </div>
    );
}

export default Shop