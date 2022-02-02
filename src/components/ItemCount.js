import { useState, useEffect } from "react";

export const ItemCount = ({stock = 0, initial = 1, addToCart}) => {
    const [qty, setQty] = useState(0)

    useEffect(() => {
      setQty(parseInt(initial))
    }, [])

    const reducir = () => {
        if(qty > initial){
            setQty(qty - 1)
        }
    };
    const aumentar = () => {
        if(qty < stock){
            setQty(qty + 1)
        }
    };
    
  return(
      <div className="ItemCount col-lg-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button  className="btn btn-outline-secondary" onClick={reducir}>-</button>
            </div>
            <input type="number" className="form-control text-center" value={qty}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={aumentar}>+</button>
            </div>
        </div>
        <button className="btn btn-primary" onClick={addToCart(qty)}>Agregar al carrito</button>
      </div>
  )
};
