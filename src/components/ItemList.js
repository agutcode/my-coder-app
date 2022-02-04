import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {data} from "../products"
import { Item } from "./Item";

export const ItemList = () => {

    const [products, setProducts] = useState([])

    let consultarData = (time) => {
      return new Promise((resolve, reject) => {
        if(data){
            setTimeout(() => {
              resolve(data)
            }, time)
        } else {
            reject("Error")
        }
      }
      )
    };
    

    useEffect(() => {
        consultarData(1000)
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
