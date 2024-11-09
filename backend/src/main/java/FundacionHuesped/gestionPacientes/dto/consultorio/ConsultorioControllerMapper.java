package FundacionHuesped.gestionPacientes.dto.consultorio;

import FundacionHuesped.gestionPacientes.model.consultorio.ConsultorioEntity;

public class ConsultorioControllerMapper {

    public static ConsultorioEntity toEntity(ConsultorioRequestDTO consultorioRequestDTO) {
        return ConsultorioEntity.builder()
                .id(consultorioRequestDTO.getId())
                .consultorio(consultorioRequestDTO.getConsultorio())
                .disponible(consultorioRequestDTO.getDisponible())
                .build();
    }

    public static ConsultorioResponseDTO toConsultorioResponseDTO(ConsultorioEntity consultorioEntity) {
        return ConsultorioResponseDTO.builder()
                .id(consultorioEntity.getId())
                .consultorio(consultorioEntity.getConsultorio())
                .disponible(consultorioEntity.getDisponible())
                .build();
    }
}
