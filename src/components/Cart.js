import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Cart = () => { 
    const cart = useContext(CartContext)
    console.log(cart.cartList)
    return(
        <Container>
            <div className="d-flex justify-content-between align-items-center my-4">                
                <h1>Shopping Cart</h1>
                <button className="btn btn-primary" onClick={cart.clear}>Vaciar Carrito</button>
            </div>
            {cart.cartList.map( p =>{
                return(
                    <Card key={p.id}>
                        <Row className="align-items-center p-4">
                            <Col><Card.Img variant="top" src={`https://picsum.photos/id/${p.id}/400/300`} /></Col>
                            <Col md="5"><h3><Link to={`/product/${p.id}`}>{p.name}</Link></h3></Col>
                            <Col className="text-center"><small>Cantidad</small><span className="d-block">{p.qty} Items</span></Col>
                            <Col className="text-center"><small>Precio Unitario</small><span className="d-block">$ {p.cost}</span></Col>
                            <Col className="text-center"><small>Total</small><span className="d-block">${p.qty * p.cost}</span></Col>  
                            <Col className="text-center"><button className="btn btn-outline-danger" onClick={() => cart.removeItem(p.id)}>&times;</button></Col>                
                        </Row>
                    </Card>

                )
            })}
            
        </Container>
    )
}