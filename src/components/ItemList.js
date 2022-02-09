import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {data} from "../products"
import { customFetch } from "../utils/customFetch";
import { Item } from "./Item";

export const ItemList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        customFetch(1000, data)
            .then(res => setProducts(res))
            .catch(error => alert(error))        
    },[])

    return(
        <Row>
            {
                products.map((product,i) => {
                    return(
                        <Col key={i}>
                            <Item data={product} />
                        </Col>
                    )
                })
            }
        </Row>
    )
};
