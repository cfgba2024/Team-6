import React, { useState } from 'react';
import { Button, Card, CardBody } from '@nextui-org/react';

const Derivar = () => {
    const [selectedRoles, setSelectedRoles] = useState([]);

    const roles = ["Laboratorio", "Consultorio", "Farmacia", "Psicología", "Abogados"];

    const toggleRole = (role) => {
        setSelectedRoles(prevSelected => 
            prevSelected.includes(role)
                ? prevSelected.filter(r => r !== role)
                : [...prevSelected, role]
        );
    };

    return (
        <Card css={{ mw: "300px", margin: "10px" }}>
            <CardBody>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <p h4>Derivación</p>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    {roles.map((role) => (
                        <Button
                            key={role}
                            auto
                            bordered={!selectedRoles.includes(role)}
                            color={selectedRoles.includes(role) ? 'secondary' : 'default'}
                            onClick={() => toggleRole(role)}
                        >
                            {role}
                        </Button>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <Button type="submit" color="secondary">
                        Derivar a: {selectedRoles.join(", ")}
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default Derivar;
