import React from 'react'
import { Card, Button, Textarea } from '@nextui-org/react';
import CardItem from '../componentes/CardItem';
import { useNavigate } from 'react-router-dom';

const listaEspera = () => {
  const navigate = useNavigate();

  // Lista de tarjetas de ejemplo
  const cardsData = [
    { id: 1, title: "Mesa", tiempo: "15min", emoji: "😄" },
    { id: 2, title: "Silla", tiempo: "13min", emoji: "😊" },
    { id: 3, title: "Vaso", tiempo: "10min", emoji: "😞" },
    { id: 4, title: "Loro", tiempo: "5min", emoji: "😢" },
    {id: 5, title: "Puente", tiempo: "3min", emoji: "😡"},
    {id: 6, title: "Perro", tiempo: "1min", emoji: "😊"},
    // Agrega más tarjetas según sea necesario
  ];
  const handleButtonClick = (card) => {
    navigate(`/info_paciente/${card.id}`, { state: { card } });
  };

  const handleLogoutClick = (e) => {
    navigate('/login');
  };  
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Lista de espera</h2>
        <Button color="secondary" auto onClick={handleLogoutClick}>LogOut</Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cardsData.map((card) => (
          <CardItem
            key={card.id}
            title={card.title}
            tiempo={card.tiempo}
            emoji = {card.emoji}
            onButtonClick={() => handleButtonClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default listaEspera;
