package FundacionHuesped.gestionPacientes.dto.servicios;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ServicioUpdateRequestDTO {


    private Long id;
    private String nombre;
}
