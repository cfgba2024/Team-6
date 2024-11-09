import React, { useState } from 'react';
import { Card, Button, Textarea } from '@nextui-org/react';
import { useNavigate, useLocation } from 'react-router-dom';
import PatientInfo from '../componentes/PatienteInfo.jsx';
import HumorState from '../componentes/HumorState.jsx';
import Derivar from '../componentes/Derivar.jsx';

const InfoPaciente = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { card } = location.state || {};
  const [callCount, setCallCount] = useState(0);

  const handleLogoutClick = () => navigate('/login');
  const handleFinalizarConsulta = () => navigate('/lista_Espera');
  
  const handleLlamar = () => {
    setCallCount(callCount + 1);
    if (callCount + 1 >= 3) {
      navigate('/lista_Espera');
    }
  };

  return (
    <div style={{ height: '100vh', padding: "40px", display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#f3f4f6' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="text-2xl font-bold text-gray-800">Información del Paciente</h2>
        <Button color="secondary" auto onClick={handleLogoutClick}>LogOut</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {card ? (
          <PatientInfo
            key={card.id}
            title={card.title}
            nombre={card.nombre}
            fecha={card.fecha}
            dni={card.dni}
            direccion={card.direccion}
            obrasocial={card.obrasocial}
            tiempo={card.tiempo}
            emoji={card.emoji}
            observacionesAdicionales={card.observacionesAdicionales}
          />
        ) : (
          <p className="text-gray-600">No se encontró información del paciente.</p>
        )}
      </div>


      {/* Derivar and HumorState Sections */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Derivación</h3>
          <Derivar />
        </div>
        <div style={{ flex: 1 }}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Estado de Humor</h3>
          <HumorState />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        
      {/* Finalizar Consulta */}
      <Button
        color="primary"
        auto
        onClick={handleFinalizarConsulta}
        style={{ width: '30%' }} // Ajusta el ancho si es necesario
      >
        Finalizar Consulta
      </Button>

      {/* Llamar */}
      <Button
        color="primary"
        auto
        onClick={handleLlamar}
        style={{ width: '30%' }} // Ajusta el ancho si es necesario
      >
        Llamar
      </Button>

      {/* Llamar Coordinador */}
      <Button
        color="primary"
        auto
        style={{ width: '30%' }} // Ajusta el ancho si es necesario
      >
        Llamar Coordinador
      </Button>
    </div>

    </div>
  );
};

export default InfoPaciente;
