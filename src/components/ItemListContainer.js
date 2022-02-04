import {Container} from 'react-bootstrap'
import { ItemList } from './ItemList';
export const ItemListContainer = () => {
  return(
      <Container className="ItemListContainer py-4">
          <ItemList />
      </Container>
  )
};
