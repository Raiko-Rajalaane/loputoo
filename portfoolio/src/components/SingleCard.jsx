
import Button from 'react-bootstrap/Button';
import Card   from 'react-bootstrap/Card';

export default function SingleCard({ title, description, imgSrc, liveUrl, gitUrl }) {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-auto d-flex flex-column">
          <Button variant="dark" href={liveUrl} target="_blank" className="mb-2">
            View live
          </Button>
          <Button variant="dark" href={gitUrl} target="_blank">
            GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
