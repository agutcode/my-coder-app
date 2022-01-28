import {Container} from 'react-bootstrap'
export const ItemListContainer = (props) => {
  return(
      <Container className="ItemListContainer py-4">
          {props.text}
      </Container>
  )
};
