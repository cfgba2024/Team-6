import React, { useState } from 'react';
import { Button, Input, Card, Select, SelectItem, CardHeader } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Image } from "@nextui-org/image";

const recepcion = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirige al componente deseado, por ejemplo '/nuevo-componente'
    window.location.reload();
  };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [consultorio, setConsultorio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedRole) {
      navigate('/lista_Espera');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <>
      <Image className="fixed top-5 left-5"
        width={200}
        alt="Fundacion Logo"
        src="./src/assets/icons/Fundacion-huesped-logo.png"
      />
      <div className="grid place-items-center h-screen">
        <Card className='pr-4 pl-4 w-[25vw]'>

          <CardHeader className="text-center text-2xl font-bold justify-center mt-5" >Ingresar Usuario</CardHeader>

          <form onSubmit={handleRedirect}>
            <Input
              className='mt-4'
              label="DNI"
              placeholder="Ingresa el DNI"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button type="submit" className='mb-5 mt-5 w-full' color="secondary" >
              Buscar Usuario
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};


export default recepcion