import React, { useState, useMemo } from 'react';
import { Button, Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

const Derivar = () => {
    const [selectedKeys, setSelectedKeys] = useState(new Set());
    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    return (
        
        <Card css={{ mw: "300px", margin: "10px" }}>
            <CardBody>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                <p h4>Derivacion</p>
            </div>    
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button type="submit" style={{ marginTop: '20px' }} color="secondary">
                        Derivar
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default Derivar;
