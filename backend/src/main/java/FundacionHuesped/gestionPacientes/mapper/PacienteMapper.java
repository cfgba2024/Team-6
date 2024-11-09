package FundacionHuesped.gestionPacientes.mapper;

import FundacionHuesped.gestionPacientes.dto.PacienteDTO;
import FundacionHuesped.gestionPacientes.model.PacienteModel;
import FundacionHuesped.gestionPacientes.utils.ApodoManager;

public class PacienteMapper {

    private static final ApodoManager apodoManager = new ApodoManager();

    public static PacienteModel mapToModel(PacienteDTO pacienteDTO) {
        String apodo = apodoManager.asignarApodo();

        return PacienteModel.builder()
                .nombre(pacienteDTO.getNombre())
                .apellido(pacienteDTO.getApellido())
                .dni(pacienteDTO.getDni())
                .email(pacienteDTO.getEmail())
                .telefono(pacienteDTO.getTelefono())
                .direccion(pacienteDTO.getDireccion())
                .apodo(apodo)
                .obraSocial(pacienteDTO.getObraSocial())
                .numeroAfiliado(pacienteDTO.getNumeroAfiliado())
                .razonDeLaConsulta(pacienteDTO.getRazonDeLaConsulta())
                .fechaNacimiento(pacienteDTO.getFechaNacimiento())
                .tiempoDeEspera(pacienteDTO.getTiempoDeEspera())
                .emoji(pacienteDTO.getEmoji())
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
                .fechaNacimiento(pacienteModel.getFechaNacimiento())
                .tiempoDeEspera(pacienteModel.getTiempoDeEspera())
                .emoji(pacienteModel.getEmoji())
                .build();
    }
}
