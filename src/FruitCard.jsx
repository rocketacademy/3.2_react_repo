import Card from "react-bootstrap/Card";

function FruitCard(props) {
  return (
    <Card style={{ width: "18rem" }} text="dark">
      <Card.Img variant="top" src={props.image_url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.colour}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          {props.price} $ - {props.stock}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FruitCard;
