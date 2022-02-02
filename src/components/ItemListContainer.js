import {Container} from 'react-bootstrap'
import { ItemCount } from './ItemCount';
export const ItemListContainer = (props) => {
  return(
      <Container className="ItemListContainer py-4">
          {props.text}
          <ItemCount stock="5" initial="1"/>
      </Container>
  )
};
