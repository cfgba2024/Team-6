// PatientInfo.jsx
import React from 'react';

const PatientInfo = ({ title, nombre, fecha, dni, direccion, obrasocial, tiempo, emoji, observacionesAdicionales }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', maxWidth: '250px' }}>
      <p><strong>ID:</strong> {title}</p>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>DNI:</strong> {dni}</p>
      <p><strong>Dirección:</strong> {direccion}</p>
      <p><strong>Obra Social:</strong> {obrasocial}</p>
      <p><strong>Tiempo:</strong> {tiempo}</p>
      <p><strong>Estado:</strong> {emoji}</p>
      <p><strong>Observaciones:</strong> {observacionesAdicionales}</p>
    </div>
  );
};

export default PatientInfo;
