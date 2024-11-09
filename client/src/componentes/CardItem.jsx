// CardItem.js
import React from 'react';
import { Card, Button, CardFooter, CardBody } from '@nextui-org/react';

const CardItem = ({ title, tiempo, emoji, onButtonClick }) => {
  return (
    <Card css={{ mw: "300px", margin: "10px" }}>
      <CardBody>
        <p h4>{title}</p>
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

export default CardItem;
