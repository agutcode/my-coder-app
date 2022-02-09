import { Row, Col, Card } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({data}) => {
  return(
    <Row>
      <Col>
          <Card.Img variant="top" src={`https://picsum.photos/id/${data.id}/400/300`} />
      </Col>
      <Col className="ps-4">
          <h1>{data.name}</h1>
          <p>
              {data.description}
          </p>
          <h3 className="mb-3 text-success">$ {data.cost}</h3>
          <ItemCount stock={data.stock} initial="1" />
      </Col>
    </Row>
  )
};
 