import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/project_img.jpg" />
      <Card.Body>
        <Card.Title>Project I</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View live</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;