import React from 'react'
import { Card, Button, Textarea } from '@nextui-org/react';
import CardItem from '../componentes/CardItem';
import { useNavigate, useLocation } from 'react-router-dom';
import PatientInfo from '../componentes/PatienteInfo';


const InfoPaciente  = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { card } = location.state || {};
  // Lista de tarjetas de ejemplo
  const cardsData = [
    { id: 1, title: "Mesa", tiempo: "15min", emoji: "😄" },
    // Agrega más tarjetas según sea necesario
  ];
  const handleButtonClick = (id) => {
    //navigate(`/info_paciente/${id}`);
  };
  const handleLogoutClick = (e) => {
    navigate('/lista_Espera');
  };  
  return (
    <div style={{ padding: "20px" }}>
      <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Lista de espera</h2>
        <Button color="secondary" auto onClick={handleLogoutClick}>LogOut</Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {card && (
          <PatientInfo
            key={card.id}
            title={card.title}
            tiempo={card.tiempo}
            emoji={card.emoji}
            onButtonClick={() => handleButtonClick(card.id)}
          />
        )}
      </div>
    </div>
    </div>
  );
};

export default InfoPaciente