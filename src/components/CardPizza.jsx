import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const CardPizza = ({name,ingredients,price,img}) => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>
                INGREDIENTES:
              </Card.Text>
              <ul>
                {ingredients.map((ingredient,i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Title>PRECIO: {price}</Card.Title>
                <div className="d-flex justify-content-center">
                <Card.Link href="#" className='mx-2'>  <Button variant="primary" >Ver más 👀 </Button></Card.Link>
                <Card.Link href="#"  className='mx-2'>  <Button variant="dark">Añadir 🛒 </Button></Card.Link>
                </div>

            </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;