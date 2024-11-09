import React, { useState } from 'react';
import { Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedKeys.size > 0) {
      navigate('/listaEspera');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', paddingTop: '50px' }}>
      <h1>Inicio de Sesión</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          placeholder="Ingresa tu nombre"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">
              {selectedValue || 'Rol'}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="Laboratorio">Laboratorio</DropdownItem>
            <DropdownItem key="Consultorio">Consultorio</DropdownItem>
            <DropdownItem key="Farmacia">Farmacia</DropdownItem>
            <DropdownItem key="Psicologia">Psicologia</DropdownItem>
            <DropdownItem key="Abogados">Abogados</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button type="submit" style={{ marginTop: '20px' }} color="secondary">
          Iniciar sesión
        </Button>
      </form>
    </div>
  );
};

export default Login;
