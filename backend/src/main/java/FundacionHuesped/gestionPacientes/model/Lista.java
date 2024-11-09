package FundacionHuesped.gestionPacientes.model;

import FundacionHuesped.gestionPacientes.model.consultorio.ConsultorioEntity;
import FundacionHuesped.gestionPacientes.model.servicios.Servicio;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Lista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "paciente_id", referencedColumnName = "id")
    private PacienteModel paciente;
    @OneToOne
    @JoinColumn(name = "servicio_id", referencedColumnName = "id")
    private Servicio servicio;
    @OneToOne
    @JoinColumn(name = "consultorio_id", referencedColumnName = "id")
    private ConsultorioEntity consultorio;
}
