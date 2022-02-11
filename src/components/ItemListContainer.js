import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap'
import { useParams } from 'react-router';
import { ItemList } from './ItemList';
export const ItemListContainer = () => {
  const [category, setCategory] = useState(false)
  
  const params = useParams()

  useEffect(() => { 
      setCategory(params.id)
  },[params.id])
  
  return(
      <Container className="ItemListContainer py-4">
          <ItemList cat={category} />
      </Container>
  )
};
