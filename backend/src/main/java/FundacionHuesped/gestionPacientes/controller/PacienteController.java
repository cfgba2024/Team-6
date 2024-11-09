package FundacionHuesped.gestionPacientes.controller;


import FundacionHuesped.gestionPacientes.dto.PacienteDTO;
import FundacionHuesped.gestionPacientes.mapper.PacienteMapper;
import FundacionHuesped.gestionPacientes.model.PacienteModel;
import FundacionHuesped.gestionPacientes.service.PacienteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pacientes")
@AllArgsConstructor
public class PacienteController {

    private final PacienteService pacienteService;

    @GetMapping
    public ResponseEntity<List<PacienteDTO>> obtenerPacientes() {
        List<PacienteDTO> pacientes = pacienteService.obtenerPacientes().stream()
                .map(PacienteMapper::mapToDTO)
                .toList();
        return ResponseEntity.ok(pacientes);
    }


    @GetMapping("/{id}")
    public ResponseEntity<PacienteDTO> obtenerPacientePorId(@PathVariable Long id) {
        PacienteDTO paciente = PacienteMapper.mapToDTO(pacienteService.obtenerPacientePorId(id));
        return ResponseEntity.ok(paciente);
    }

    @PostMapping("/")
    public ResponseEntity<PacienteDTO> agregarPaciente(@RequestBody PacienteDTO pacienteDTO) {
        PacienteDTO pacienteCreadoDTO = PacienteMapper
                .mapToDTO(pacienteService.agregarPaciente((PacienteModel) PacienteMapper.mapToModel(pacienteDTO)));
        return ResponseEntity.status(HttpStatus.CREATED).body(pacienteCreadoDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PacienteDTO> actualizarPaciente(@PathVariable Long id, @RequestBody PacienteDTO pacienteDTO) {
        PacienteDTO pacienteActualizadoDTO = PacienteMapper
                .mapToDTO(pacienteService.actualizarPaciente(id, (PacienteModel) PacienteMapper.mapToModel(pacienteDTO)));
        return ResponseEntity.ok(pacienteActualizadoDTO);
    }


}
