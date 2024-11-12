import React from 'react';
import { Button } from '@nextui-org/react';
import CardItem from '../componentes/CardItem';
import { useNavigate, useLocation } from 'react-router-dom';

const listaEspera = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role, consultorio } = location.state || {};

  // Lista de tarjetas de ejemplo
  const cardsData = [
    { 
      id: 1, title: "VM69", tiempo: "15min", emoji: "😄", observacionesAdicionales: "Requiere verificación de datos.", 
      nombre: "Juan Pérez", fecha: "10/11/2024", dni: "12345678", direccion: "Calle Falsa 123", obrasocial: "ObraSocial1" 
    },
    { 
      id: 2, title: "SCMH", tiempo: "13min", emoji: "😊", observacionesAdicionales: "Todo en orden, verificar documentación.", 
      nombre: "Ana Gómez", fecha: "11/11/2024", dni: "87654321", direccion: "Avenida Siempreviva 742", obrasocial: "ObraSocial2" 
    },
    { 
      id: 3, title: "9MLK", tiempo: "10min", emoji: "😞", observacionesAdicionales: "Pendiente de revisión por el supervisor.", 
      nombre: "Carlos López", fecha: "12/11/2024", dni: "56789012", direccion: "Pasaje Los Olivos 45", obrasocial: "ObraSocial3" 
    },
    { 
      id: 4, title: "LOLG", tiempo: "5min", emoji: "😢", observacionesAdicionales: "Hay un error en el proceso.", 
      nombre: "Lucía Fernández", fecha: "13/11/2024", dni: "23456789", direccion: "Calle de las Flores 89", obrasocial: "ObraSocial4" 
    },
    { 
      id: 5, title: "MVTP", tiempo: "3min", emoji: "😡", observacionesAdicionales: "Falta completar algunos datos.", 
      nombre: "Mario Ruiz", fecha: "14/11/2024", dni: "98765432", direccion: "Calle del Sol 27", obrasocial: "ObraSocial5" 
    },
    { 
      id: 6, title: "BY28", tiempo: "1min", emoji: "😊", observacionesAdicionales: "Revisado y aprobado.", 
      nombre: "Sofía García", fecha: "15/11/2024", dni: "12309845", direccion: "Bulevar Azul 256", obrasocial: "ObraSocial6" 
    },
    { 
      id: 7, title: "KJ72", tiempo: "8min", emoji: "😎", observacionesAdicionales: "Se necesita más información para continuar.", 
      nombre: "Diego Martínez", fecha: "16/11/2024", dni: "78945612", direccion: "Calle Nueva 78", obrasocial: "ObraSocial7" 
    },
    { 
      id: 8, title: "VZ47", tiempo: "12min", emoji: "🤔", observacionesAdicionales: "Asegurarse de que el informe esté completo.", 
      nombre: "Raquel Peña", fecha: "17/11/2024", dni: "89012347", direccion: "Avenida del Parque 134", obrasocial: "ObraSocial8" 
    },
    { 
      id: 9, title: "PL30", tiempo: "20min", emoji: "😶", observacionesAdicionales: "Esperando la confirmación final.", 
      nombre: "Miguel Sosa", fecha: "18/11/2024", dni: "45678901", direccion: "Pasaje Viejo 60", obrasocial: "ObraSocial9" 
    },
    { 
      id: 10, title: "TX92", tiempo: "6min", emoji: "🥺", observacionesAdicionales: "Requiere atención urgente.", 
      nombre: "Paula Domínguez", fecha: "19/11/2024", dni: "34567890", direccion: "Callejón Serrano 11", obrasocial: "ObraSocial10" 
    }
  ];
  

  const handleButtonClick = (card) => {
    navigate(`/info_paciente/${card.id}`, { state: { card } });
  };

  const handleLogoutClick = (e) => {
    navigate('/login');
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: "url('./src/assets/icons/Fundacion-huesped-logo.png')",
        backgroundSize: "30vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div style={{ padding: "20px" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="text-2xl font-bold">Lista de espera {role}</h2>
          <Button color="secondary" auto onClick={handleLogoutClick}>LogOut</Button>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-5 ">
          {cardsData.map((card) => (
            <div key={card.id} className="bg-white bg-opacity-95 shadow-lg rounded-lg p-4 relative transition transform hover:scale-105 hover:shadow-xl">
              {/* Contenido de la tarjeta */}
              <div className="flex flex-col justify-between h-full">
                {/* Título y Emoji */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <span className="text-3xl">{card.emoji}</span>
                </div>
                
                {/* Tiempo de espera (en negrita y en la esquina inferior derecha) */}
                <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-800">
                  {card.tiempo}
                </div>
                
                {/* Observaciones */}
                <p className="text-sm text-gray-600 mt-2 mb-10">{card.observacionesAdicionales}</p>

                <Button className="font-bold hover:bg-red-700 focus:outline-none" style={{ width:'150px', backgroundColor: '#e73c4e', color: '#ffffff', fontSize: 'bold' }} onClick={() => handleButtonClick(card)} auto>
                  Llamar paciente
                </Button>

              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default listaEspera;
