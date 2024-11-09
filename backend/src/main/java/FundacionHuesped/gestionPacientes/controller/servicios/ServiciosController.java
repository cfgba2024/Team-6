package FundacionHuesped.gestionPacientes.controller.servicios;

import FundacionHuesped.gestionPacientes.dto.servicios.ServicioRequestDTO;
import FundacionHuesped.gestionPacientes.dto.servicios.ServicioUpdateRequestDTO;
import FundacionHuesped.gestionPacientes.model.servicios.Servicio;
import FundacionHuesped.gestionPacientes.service.ServiciosService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/servicios")
@AllArgsConstructor
public class ServiciosController {

    private final ServiciosService serviciosService;

    @PostMapping("")
    public ResponseEntity<?> crearServicio(@RequestBody @Valid ServicioRequestDTO servicioRequest) {
        Servicio servicioCreado = serviciosService.crearServicio(ServiciosControllerMapper.servicioRequestToServicio(servicioRequest));
        return ResponseEntity.status(HttpStatus.CREATED).body(ServiciosControllerMapper.servicioToServiciosResponseDTO(servicioCreado));
    }

    @GetMapping("")
    public ResponseEntity<?> obtenerServicios() {
        return ResponseEntity.ok(serviciosService.obtenerServicios().stream().map(ServiciosControllerMapper::servicioToServiciosResponseDTO).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerServicio(@PathVariable Long id) {
        return ResponseEntity.ok(ServiciosControllerMapper.servicioToServiciosResponseDTO(serviciosService.obtenerServicio(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarServicio(@PathVariable Long id, @RequestBody ServicioUpdateRequestDTO servicioRequest) {

        servicioRequest.setId(id);
        Servicio servicioActualizado = serviciosService.actualizarServicio(ServiciosControllerMapper.servicioUpdateRequestToServicio(servicioRequest));
        return ResponseEntity.ok(ServiciosControllerMapper.servicioToServiciosResponseDTO(servicioActualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarServicio(@PathVariable Long id) {
        serviciosService.eliminarServicio(id);
        return ResponseEntity.noContent().build();
    }


}
