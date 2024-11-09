package FundacionHuesped.gestionPacientes.controller.consultorio;

import FundacionHuesped.gestionPacientes.dto.consultorio.ConsultorioControllerMapper;
import FundacionHuesped.gestionPacientes.dto.consultorio.ConsultorioRequestDTO;
import FundacionHuesped.gestionPacientes.model.consultorio.ConsultorioEntity;
import FundacionHuesped.gestionPacientes.service.ConsultorioService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/consultorios")
@AllArgsConstructor
public class ConsultorioController {
    private final ConsultorioService consultorioService;

    @PostMapping("")
    public ResponseEntity<?> crearConsultorio(@RequestBody ConsultorioRequestDTO consultorioRequestDTO) {
        ConsultorioEntity nuevoConsultorio = ConsultorioControllerMapper.toEntity(consultorioRequestDTO);
        return ResponseEntity.ok(ConsultorioControllerMapper.toConsultorioResponseDTO(consultorioService.crearConsultorio(nuevoConsultorio)));
    }

    @GetMapping("")
    public ResponseEntity<?> listarConsultorios() {
        return ResponseEntity.ok(consultorioService.listarConsultorios().stream().map(ConsultorioControllerMapper::toConsultorioResponseDTO).toList());
    }

    @GetMapping("/disponibles")
    public ResponseEntity<?> listarConsultoriosDisponibles() {
        return ResponseEntity.ok(consultorioService.listarConsultoriosDisponibles().stream().map(ConsultorioControllerMapper::toConsultorioResponseDTO).toList());
    }

    @PutMapping("/toggle-disponible/{id}")
    public ResponseEntity<?> toggleDisponible(@PathVariable Long id) {
        return ResponseEntity.ok(ConsultorioControllerMapper.toConsultorioResponseDTO(consultorioService.toggleDisponible(id)));
    }
}
