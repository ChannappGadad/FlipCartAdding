import React, {useState} from "react";

const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0);

    return(
        cart.map((item, index) => {
            return(
                <div className="formInput">
                    <div>
                        <h2>{item.name}</h2>
                        <h4>{item.description}</h4>
                        <h4>{item.price}</h4>
                        <button>+</button>
                        <label>0</label>
                        <button>-</button>
                    </div>
                    <div>
                        <span>Price of the item</span>
                        <span>Total money</span>
                    </div>
                </div>
            )
        })
    )
}

export default Cart;
