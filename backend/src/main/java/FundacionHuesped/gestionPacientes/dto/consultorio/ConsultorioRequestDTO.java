package FundacionHuesped.gestionPacientes.dto.consultorio;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ConsultorioRequestDTO {
    private Long id;
    private String consultorio;
    private Boolean disponible;
}
