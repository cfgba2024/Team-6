import React, { useState } from 'react';
import { Button, Input, Card, Select, SelectItem, CardHeader } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Image } from "@nextui-org/image";

const recepcion = () => {
  const navigate = useNavigate();

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

          <form onSubmit={handleSubmit}>
            <Input
              className='mt-4'
              label="Usuario"
              placeholder="Ingresa su usuario"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              className='mt-4'
              label="Direccion"
              placeholder="Ingresa su Direccion"
              fullWidth
              //value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              className='mt-4'
              label="Motivo consulta"
              placeholder="Ingresa motivo consulta"
              fullWidth
              //value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Select
              label="Puesto"
              placeholder="Selecciona puesto"
              className="w-full mt-4"
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <SelectItem key="Laboratorio">Laboratorio</SelectItem>
              <SelectItem key="Medico">Medico</SelectItem>
              <SelectItem key="Administracion">Administracion</SelectItem>
              <SelectItem key="Recepcionista">Recepcionista</SelectItem>
              <SelectItem key="Farmacia">Farmacia</SelectItem>
              <SelectItem key="Psicologia">Psicologia</SelectItem>
              <SelectItem key="Abogados">Abogados</SelectItem>
            </Select>
            <Select
              label="Humor"
              placeholder="Selecciona humor"
              className="w-full mt-4"
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <SelectItem key="feliz">😄</SelectItem>
              <SelectItem key="neutral">😊</SelectItem>
              <SelectItem key="triste">😞</SelectItem>
              <SelectItem key="llorando">😢</SelectItem>
              <SelectItem key="enojado">😡</SelectItem>
            </Select>
            {selectedRole === 'Medico' && (
              <Select
                label="¿Qué consultorio vas a utilizar?"
                placeholder="Selecciona un consultorio"
                fullWidth
                value={consultorio}
                onChange={(e) => setConsultorio(e.target.value)}
                className="mt-4"
              >
                <SelectItem value="Consultorio 1">Consultorio 1</SelectItem>
                <SelectItem value="Consultorio 2">Consultorio 2</SelectItem>
                <SelectItem value="Consultorio 3">Consultorio 3</SelectItem>
                <SelectItem value="Consultorio 4">Consultorio 4</SelectItem>
                <SelectItem value="Consultorio 5">Consultorio 5</SelectItem>
                <SelectItem value="Consultorio 6">Consultorio 6</SelectItem>
                <SelectItem value="Consultorio 7">Consultorio 7</SelectItem>
                <SelectItem value="Consultorio 8">Consultorio 8</SelectItem>
                <SelectItem value="Consultorio 9">Consultorio 9</SelectItem>
                <SelectItem value="Consultorio 10">Consultorio 10</SelectItem>
                <SelectItem value="Consultorio 11">Consultorio 11</SelectItem>
              </Select>
            )}

            <Button type="submit" className='mb-5 mt-5 w-full' color="secondary">
              Cargar Usuario
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};


export default recepcion