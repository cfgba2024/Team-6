import React, { useState } from 'react';
import { Card, Button, Textarea } from '@nextui-org/react';
import CardItem from '../componentes/CardItem';
import { useNavigate, useLocation } from 'react-router-dom';
import PatientInfo from '../componentes/PatienteInfo';
import HumorState from '../componentes/HumorState';
import Derivar from '../componentes/Derivar';


const infoPaciente  = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { card } = location.state || {};
  const [callCount, setCallCount] = useState(0);

  // Lista de tarjetas de ejemplo
  const cardsData = [
    { id: 1, title: "Mesa", tiempo: "15min", emoji: "😄" },
    // Agrega más tarjetas según sea necesario
  ];
  const handleButtonClick = (id) => {
    //navigate(`/info_paciente/${id}`);
  };
  const handleLogoutClick = (e) => {
    navigate('/login');
  }; 
  const handleFinalizarConsulta = () => {
    navigate('/lista_Espera');
  };
  const handleLlamar = () => {
    setCallCount(callCount + 1);
    if (callCount + 1 >= 3) {
      navigate('/lista_Espera');
    }
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
      <div>
        <Derivar/>
      </div>
      <div>
        <HumorState/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button color="primary" auto onClick={handleFinalizarConsulta}>
          Finalizar consulta
        </Button>
        <Button color="primary" uto onClick={handleLlamar}>
          Llamar
        </Button>
        <Button color="primary" auto>
          Llamar Cordinador
        </Button>
      </div>
    </div>
    </div>
  );
};

export default infoPaciente