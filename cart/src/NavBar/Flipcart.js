import "./FlipCart.css";
import items from "../DataFile";
import Cards from "./Card";

function Flipcart({handleClick}) {

    return(
        <section>
            {
                
                items.map((item, index) => {
                return(
                   <Cards key={item.id} item={item} handleClick={handleClick}/> 
                    )
                })  
            }
        </section>

    )
}

export default Flipcart;