import {Container, Alert} from 'react-bootstrap'
import { ItemDetail } from './ItemDetail';
import { data } from '../products';
import { useEffect, useState } from 'react';
import { customFetch } from '../utils/customFetch';

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])

  

    useEffect(() => {
        customFetch(1000, data[2])
            .then(res => setProduct(res))
            .catch(error => alert(error))        
    },[])

  return(
      <Container className="ItemDetailContainer py-4">
        {product ?         
          <ItemDetail data={product} />
          :
          <Alert variant="info">
            <p className="mb-0">Ups! ocurrió un error inesperado por favor intente de nuevo más tarde.</p>
          </Alert>
        }
      </Container>
  )
};
