package FundacionHuesped.gestionPacientes.model.consultorio;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ConsultorioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String consultorio;
    @Column(columnDefinition = "boolean default false")
    private Boolean disponible;

}
