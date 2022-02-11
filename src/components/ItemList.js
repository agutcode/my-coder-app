import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {data} from "../products"
import { customFetch } from "../utils/customFetch";
import { Item } from "./Item";

export const ItemList = ({cat}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        customFetch(1000, data)
            .then(res => {
                let productList = cat ? res.filter(p => p.category === parseInt(cat)) : res;
                setProducts(productList)
            })
            .catch(error => alert(error))        
    },[cat])

    return(
        <Row>
            {
                products.map((product,i) => {
                    return(
                        <Col key={i} md="6" lg="4">
                            <Item data={product} />
                        </Col>
                    )
                })
            }
        </Row>
    )
};
