package FundacionHuesped.gestionPacientes.controller.lista;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/lista-espera")
@AllArgsConstructor
public class ListaController {
    private final ListaService listaService;
    @PostMapping("")
    public ResponseEntity<?> agregarPacienteALista(@RequestBody ListaEsperaDTO listaEsperaDTO) {
        return ResponseEntity.ok(listaService.agregarPacienteALista(listaEsperaDTO));
    }
}
