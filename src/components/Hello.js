import React from 'react';
import { ListGroup } from 'react-bootstrap';

function holamundo(names) {
return names.map((n) => <ListGroup.Item key={n}>{`Hola ${n}`}</ListGroup.Item>)
}

function Hello({names}) {
  return (
    <>
    <h2>Renderizado de arrays en Lista</h2>
    <ListGroup>
        {holamundo(names)}
    </ListGroup>
    </>
  );
}

export default Hello;