import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({data}) => {
  return(
    <Card>
        <Card.Img variant="top" src={`https://picsum.photos/id/${data.id}/400/300`} />
        <Card.Body>
            <Card.Title><Link to={`/product/${data.id}`}>{data.name}</Link></Card.Title>
            <Card.Text>
                {data.description}
            </Card.Text>
            <Card.Subtitle className="mb-3 text-success">$ {data.cost}</Card.Subtitle>
        </Card.Body>
    </Card>
  )
};
 