import React from 'react';

import {Card, CardBody} from "@nextui-org/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/table";
  import CarrouselPantallaEspera from '../components/CarrouselPantallaEspera';


const PantallaEspera = () => {
  return (
    <>
        <Card className='mt-1 mr-1 ml-1 mb-1'>
            <CardBody className="w-1/2">
                <img className='w-64' src="./src/assets/icons/Fundacion-huesped-logo.png" alt="" />
            </CardBody>
        </Card>

        <div className="flex flex-row mt-4 h-full">
            <Table className="w-full mr-2 ml-2"> 
            <TableHeader>
                <TableColumn>Paciente</TableColumn>
                <TableColumn>Servicio</TableColumn>
                <TableColumn>Puesto</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>MJUMO1997</TableCell>
                    <TableCell>Consultorio</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>GSEGO1987</TableCell>
                    <TableCell>Laboratorio</TableCell>
                    <TableCell>-</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>LLULO1991</TableCell>
                    <TableCell>Farmacia</TableCell>
                    <TableCell>-</TableCell>
                </TableRow>
            </TableBody>
            </Table>

            <Card className="w-1/2 mr-2 ml-2">
                <CarrouselPantallaEspera className="w-full object-cover"></CarrouselPantallaEspera>
            </Card>
        </div>
    </>
  );
}

export default PantallaEspera;
