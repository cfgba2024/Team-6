package FundacionHuesped.gestionPacientes.dto.servicios;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ServicioRequestDTO {

    @NotNull
    @NotEmpty
    private String nombre;
}
