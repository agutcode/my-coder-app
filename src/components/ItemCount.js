import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const ItemCount = ({stock = 0, initial = 1}) => {
    const [qty, setQty] = useState(0)

    useEffect(() => {
      setQty(parseInt(initial))
    }, [initial])

    const reducir = () => {
        if(qty > initial){
            setQty(qty-1)
        }
    };
    const aumentar = () => {
        if(qty < stock){
            setQty(qty+1)
        }
    };
    
  return(
      <Row className="ItemCount">
            <Col>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button  className="btn btn-outline-secondary" onClick={reducir}>-</button>
                    </div>
                    <input type="number" className="form-control text-center" value={qty} onChange={()=>true} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={aumentar}>+</button>
                    </div>
                </div>
            </Col>
            <Col>
                <button className="btn btn-primary">Agregar al carrito</button>
            </Col>
      </Row>
  )
};
