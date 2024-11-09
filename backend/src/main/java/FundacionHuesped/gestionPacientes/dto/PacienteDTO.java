package FundacionHuesped.gestionPacientes.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PacienteDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String dni;
    private String email;
    private String telefono;
    private String direccion;
    private String apodo;
    private String obraSocial;
    private String numeroAfiliado;
    private String razonDeLaConsulta;


}
