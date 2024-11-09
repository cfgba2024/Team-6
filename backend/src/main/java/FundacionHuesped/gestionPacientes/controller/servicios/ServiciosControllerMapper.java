package FundacionHuesped.gestionPacientes.controller.servicios;

import FundacionHuesped.gestionPacientes.dto.servicios.ServicioRequestDTO;
import FundacionHuesped.gestionPacientes.dto.servicios.ServicioUpdateRequestDTO;
import FundacionHuesped.gestionPacientes.dto.servicios.ServiciosResponseDTO;
import FundacionHuesped.gestionPacientes.model.servicios.Servicio;

public class ServiciosControllerMapper {
    public static Servicio servicioRequestToServicio(ServicioRequestDTO servicioRequest) {
        return Servicio.builder().nombre(servicioRequest.getNombre()).build();
    }

    public static ServiciosResponseDTO servicioToServiciosResponseDTO(Servicio servicio) {
        return ServiciosResponseDTO.builder().id(servicio.getId()).nombre(servicio.getNombre()).build();
    }

    public static Servicio servicioUpdateRequestToServicio(ServicioUpdateRequestDTO servicioUpdateRequest) {
        return Servicio.builder().id(servicioUpdateRequest.getId()).nombre(servicioUpdateRequest.getNombre()).build();
    }
}
