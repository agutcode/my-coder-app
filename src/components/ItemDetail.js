import { useContext, useState } from "react";
import { Row, Col, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({data}) => {
  const [cart, setCart] = useState(false);

  const context = useContext(CartContext)

  const onAdd = (qty) => { 
    if(qty > 0){
      setCart(true)
      context.addItem(data, qty)
    }
  }
  return(
    <Row>
      <Col>
          <Card.Img variant="top" src={`https://picsum.photos/id/${data.id}/400/300`} />
      </Col>
      <Col className="ps-4">
          <h1>{data.name}</h1>
          <p>
              {data.description}
          </p>
          <h3 className="mb-3 text-success">$ {data.cost}</h3>
          {cart ? 
            <>
              <Alert variant="success">¡Listo! Agregaste el producto al carrito de compras</Alert>
              <Link to="/cart" className="btn btn-primary">Ir al carrito</Link>
            </>
            :
            <ItemCount stock={data.stock} initial="0" onAdd={onAdd}/>
          }
      </Col>
    </Row>
  )
};
 