package FundacionHuesped.gestionPacientes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;

@Entity(name = "Paciente")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@SuperBuilder
public class PacienteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private LocalDate fechaNacimiento;
    private int tiempoDeEspera;
}
