import {Container} from 'react-bootstrap'
export const ItemListContainer = (props) => {
  return(
      <Container className="ItemListContainer">
          {props.text}
      </Container>
  )
};
