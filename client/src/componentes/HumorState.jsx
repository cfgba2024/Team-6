// HumorState.js
import React, { useState } from 'react';
import { Card, Button, CardBody } from '@nextui-org/react';

const HumorState = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleButtonClick = (emoji) => {
    setSelectedEmoji(emoji);
    console.log(`Clicked on ${emoji}`);
  };

  return (
    <Card css={{ maxWidth: "300px", margin: "10px" }}>
      <CardBody>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <p h4>Situación emocional</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <Button
            color={selectedEmoji === "😄" ? "success" : "primary"}
            onClick={() => handleButtonClick("😄")}
            auto
          >
            😄
          </Button>
          <Button
            color={selectedEmoji === "😞" ? "success" : "primary"}
            onClick={() => handleButtonClick("😞")}
            auto
          >
            😞
          </Button>
          <Button
            color={selectedEmoji === "😢" ? "success" : "primary"}
            onClick={() => handleButtonClick("😢")}
            auto
          >
            😢
          </Button>
          <Button
            color={selectedEmoji === "😡" ? "success" : "primary"}
            onClick={() => handleButtonClick("😡")}
            auto
          >
            😡
          </Button>
          <Button
            color={selectedEmoji === "😊" ? "success" : "primary"}
            onClick={() => handleButtonClick("😊")}
            auto
          >
            😊
          </Button>
        </div>

      </CardBody>
    </Card>
  );
};

export default HumorState;
