import {Container} from 'react-bootstrap'
import { ItemDetail } from './ItemDetail';
import { data } from '../products';
import { useEffect, useState } from 'react';
import { customFetch } from '../utils/customFetch';
import { useParams } from 'react-router';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(false)

    const params = useParams()


    useEffect(() => {
      const productObject = data.find(p => p.id === parseInt(params.id))
      customFetch(1000, productObject)
          .then(res => setProduct(res))
          .catch(error => console.log(error))        
    },[params.id])

  return(
      <Container className="ItemDetailContainer py-4">
        {product ?         
          <ItemDetail data={product} />
          :
          <p>Cargando...</p>
        }
      </Container>
  )
};
