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


const PantallaConsultorio = () => {
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
                <TableColumn>Profecional</TableColumn>
                <TableColumn>Habitacion Libre</TableColumn>
                <TableColumn>Puesto</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Abogado</TableCell>
                    <TableCell>Consultorio</TableCell>
                    <TableCell>10</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Psicologo</TableCell>
                    <TableCell>Consultorio</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Abogado</TableCell>
                    <TableCell>Consultorio</TableCell>
                    <TableCell>1</TableCell>
                </TableRow>
            </TableBody>
            </Table>

        </div>
    </>
  );
}

export default PantallaConsultorio;
