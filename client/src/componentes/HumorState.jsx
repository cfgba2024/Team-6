// CardItem.js
import React from 'react';
import { Card, Button, CardFooter, CardBody } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const HumorState = () => {
  const navigate = useNavigate();

  const handleButtonClick = (emoji) => {
    // Aquí puedes manejar la lógica cuando se hace clic en un botón
    console.log(`Clicked on ${emoji}`);
  };

  return (
    <Card css={{ mw: "300px", margin: "10px" }}>
      <CardBody>
        <p h4>Situación emocional</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Button color="primary" onClick={() => handleButtonClick("😄")} auto>
            😄
          </Button>
          <Button color="primary" onClick={() => handleButtonClick("😞")} auto>
            😞
          </Button>
          <Button color="primary" onClick={() => handleButtonClick("😢")} auto>
            😢
          </Button>
          <Button color="primary" onClick={() => handleButtonClick("😡")} auto>
            😡
          </Button>
          <Button color="primary" onClick={() => handleButtonClick("😊")} auto>
            😊
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default HumorState;
