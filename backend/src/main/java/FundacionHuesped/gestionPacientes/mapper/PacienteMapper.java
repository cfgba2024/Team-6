package FundacionHuesped.gestionPacientes.mapper;

import FundacionHuesped.gestionPacientes.dto.PacienteDTO;
import FundacionHuesped.gestionPacientes.model.PacienteModel;

public class PacienteMapper {

 public static PacienteModel mapToModel(PacienteDTO pacienteDTO) {
    return PacienteModel.builder()
            .nombre(pacienteDTO.getNombre())
            .apellido(pacienteDTO.getApellido())
            .dni(pacienteDTO.getDni())
            .email(pacienteDTO.getEmail())
            .telefono(pacienteDTO.getTelefono())
            .direccion(pacienteDTO.getDireccion())
            .apodo(pacienteDTO.getApodo())
            .obraSocial(pacienteDTO.getObraSocial())
            .numeroAfiliado(pacienteDTO.getNumeroAfiliado())
            .razonDeLaConsulta(pacienteDTO.getRazonDeLaConsulta())
            .build();
 }


    public static PacienteDTO mapToDTO(PacienteModel pacienteModel) {
        return PacienteDTO.builder()
                .id(pacienteModel.getId())
                .nombre(pacienteModel.getNombre())
                .apellido(pacienteModel.getApellido())
                .dni(pacienteModel.getDni())
                .email(pacienteModel.getEmail())
                .telefono(pacienteModel.getTelefono())
                .direccion(pacienteModel.getDireccion())
                .apodo(pacienteModel.getApodo())
                .obraSocial(pacienteModel.getObraSocial())
                .numeroAfiliado(pacienteModel.getNumeroAfiliado())
                .razonDeLaConsulta(pacienteModel.getRazonDeLaConsulta())
                .build();
    }

}
