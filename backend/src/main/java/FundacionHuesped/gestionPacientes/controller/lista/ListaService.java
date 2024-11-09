package FundacionHuesped.gestionPacientes.controller.lista;

import FundacionHuesped.gestionPacientes.model.Lista;
import FundacionHuesped.gestionPacientes.model.PacienteModel;
import FundacionHuesped.gestionPacientes.model.consultorio.ConsultorioEntity;
import FundacionHuesped.gestionPacientes.model.servicios.Servicio;
import FundacionHuesped.gestionPacientes.repository.ListaEsperaRepository;
import FundacionHuesped.gestionPacientes.service.ConsultorioService;
import FundacionHuesped.gestionPacientes.service.PacienteService;
import FundacionHuesped.gestionPacientes.service.ServiciosService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ListaService {

    private final ListaEsperaRepository listaEsperaRepository;
    private final ConsultorioService consultorioService;
    private final PacienteService pacienteService;
    private final ServiciosService serviciosService;

    public Lista agregarPacienteALista(ListaEsperaDTO listaEsperaDTO) {
        PacienteModel pacienteModel = pacienteService.obtenerPacientePorId(listaEsperaDTO.getPacienteId());
        Servicio servicio = serviciosService.obtenerServicio(listaEsperaDTO.getServicioId());
        ConsultorioEntity consultorioEntity = consultorioService.obtenerConsultorio(listaEsperaDTO.getConsultorioId());

        return listaEsperaRepository.save(Lista.builder().paciente(pacienteModel).servicio(servicio).consultorio(consultorioEntity).build());

    }
}
