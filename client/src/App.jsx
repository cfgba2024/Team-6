import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

import  Login from './pages/login.jsx'
import  ListaEspera from './pages/listaEspera.jsx'
import  InfoPaciente from './pages/infoPaciente.jsx'
import  PantallaEspera from './pages/pantallaEspera.jsx'
import  AlertaStadingCordinator from './pages/alertaStadingCordinator.jsx'
import  Recepcion from './pages/recepcion.jsx'

import {Button} from "@nextui-org/react";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/lista_espera" element={<ListaEspera />} />
          <Route path="/info_paciente/:id" element={<InfoPaciente />} />
          <Route path="/pantalla_espera" element={<PantallaEspera />} />
          <Route path="/alerta_standing_cordinator" element={<AlertaStadingCordinator />} />
          <Route path="/recepcion" element={<Recepcion />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
