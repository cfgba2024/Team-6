// CardItem.js
import React from 'react';
import { Card, Button, CardFooter, CardBody } from '@nextui-org/react';

const PatienteInfo = ({ title, tiempo, emoji, nombre, fecha, dni, direccion, obrasocial, onButtonClick }) => {
  return (
    <Card css={{ mw: "300px", margin: "10px" }}>
      <CardBody>
        <p h4>{title}</p>
        <p>{nombre}</p>
        <p>{fecha}</p>
        <p>{dni}</p>
        <p>{direccion}</p>
        <p>{obrasocial}</p>
        <p>{tiempo}</p>
        <p>{emoji}</p>
      </CardBody>
      <CardFooter>
        <Button color="primary" onClick={onButtonClick} auto>
          LLamar paciente
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PatienteInfo;
