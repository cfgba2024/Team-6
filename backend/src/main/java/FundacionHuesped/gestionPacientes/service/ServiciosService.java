package FundacionHuesped.gestionPacientes.service;

import FundacionHuesped.gestionPacientes.model.servicios.Servicio;
import FundacionHuesped.gestionPacientes.repository.ServiciosRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiciosService {
    private final ServiciosRepository serviciosRepository;

    public Servicio crearServicio(Servicio servicio) {
        return serviciosRepository.save(servicio);
    }

    public Servicio obtenerServicio(Long id) {
        return serviciosRepository.findById(id).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));
    }

    public List<Servicio> obtenerServicios() { return serviciosRepository.findAll(); }

    public Servicio actualizarServicio(Servicio servicio) {
        return serviciosRepository.save(servicio);
    }

    public void eliminarServicio(Long id) {
        serviciosRepository.deleteById(id);
    }
}
