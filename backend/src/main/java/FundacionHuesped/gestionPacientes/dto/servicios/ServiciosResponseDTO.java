package FundacionHuesped.gestionPacientes.dto.servicios;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ServiciosResponseDTO {
    private Long id;
    private String nombre;
}
