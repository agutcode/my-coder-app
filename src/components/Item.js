import { Card } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export const Item = (props) => {
  return(
    <Card>
        <Card.Img variant="top" src={`https://picsum.photos/id/${props.data.id}/400/300`} />
        <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Text>
                {props.data.description}
            </Card.Text>
            <Card.Subtitle className="mb-3 text-success">$ {props.data.cost}</Card.Subtitle>
            <ItemCount stock={props.data.stock} initial="1" />
        </Card.Body>
    </Card>
  )
};
 