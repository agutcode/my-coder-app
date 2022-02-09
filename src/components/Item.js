import { Card } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export const Item = ({data}) => {
  return(
    <Card>
        <Card.Img variant="top" src={`https://picsum.photos/id/${data.id}/400/300`} />
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
                {data.description}
            </Card.Text>
            <Card.Subtitle className="mb-3 text-success">$ {data.cost}</Card.Subtitle>
            <ItemCount stock={data.stock} initial="1" />
        </Card.Body>
    </Card>
  )
};
 