package FundacionHuesped.gestionPacientes.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

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
    private int emoji;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechaNacimiento;
    private int tiempoDeEspera;
}
