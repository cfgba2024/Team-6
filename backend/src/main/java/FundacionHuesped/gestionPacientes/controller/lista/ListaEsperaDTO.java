package FundacionHuesped.gestionPacientes.controller.lista;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListaEsperaDTO {
    private Long id;
    private Long pacienteId;
    private Long servicioId;
    private Long consultorioId;
}
