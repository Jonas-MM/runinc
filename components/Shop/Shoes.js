import React from 'react'
import shoe_1 from '../../img/shoe_01.jpg'
import shoe_2 from '../../img/shoe_02.jpg'
import shoe_3 from '../../img/shoe_03.jpg'
import shoe_4 from '../../img/shoe_04.jpg'


// const [sko] = useState([
//     { shoeimg: "/img/shoe_01.jpg", shoetxt: "Puma Highland 3000 - brown" },
//     { shoeimg: "/img/shoe_02.jpg", shoetxt: "Asics Free Street" },
//     { shoeimg: "/img/shoe_03.jpg", shoetxt: "New Balance Runner Bounce" },
//     { shoeimg: "/img/shoe_04.jpg", shoetxt: "New Balance New York 2018" },
//     { shoeimg: "/img/shoe_01.jpg", shoetxt: "Puma Highland 3000 - brown" },
//     { shoeimg: "/img/shoe_02.jpg", shoetxt: "New Balance New York 2018" }
// ]);

const Shoes = () => {
    return (
        <div className="container shoesContainer">
            <div className="shopBanner">
                <h1>SHOP</h1>
            </div>
            <div className="allShoes">
                <div>
                    <img src={shoe_1} alt="shoeImg"/>
                    <p className="center">Puma Highland 3000 - brown</p>
                </div>
                <div>
                    <img src={shoe_2} alt="shoeImg"/>
                    <p className="center">Asics Free Street</p>
                </div>
                <div>
                    <img src={shoe_3} alt="shoeImg"/>
                    <p className="center">New Balance Runner Bounce</p>
                </div>
                <div>
                    <img src={shoe_4} alt="shoeImg"/>
                    <p className="center">New Balance New York 2018</p>
                </div>
                <div>
                    <img src={shoe_1} alt="shoeImg"/>
                    <p className="center">Puma Highland 3000 - brown</p>
                </div>
                <div>
                    <img src={shoe_2} alt="shoeImg"/>
                    <p className="center">Asics Free Street</p>
                </div>
            </div>
        </div>
    )
}


export default Shoes;





// const Shoes = (props) => {

//     let shoesList = props.shoeListProp.map(
//         c => {
//             return (
//                 <div className="container">
//                     <img src={c.shoeimg} alt=""/>
//                     <p>{c.shoetxt}</p>

//                 </div>
//             );
//         }
//     )
//     return (
//         <div>

//             <h1>skooo</h1>
//             {shoesList}
//         </div>
//     )
// }