package FundacionHuesped.gestionPacientes.service;

import FundacionHuesped.gestionPacientes.model.consultorio.ConsultorioEntity;
import FundacionHuesped.gestionPacientes.repository.ConsultorioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ConsultorioService {
    private final ConsultorioRepository consultorioRepository;

    public ConsultorioEntity crearConsultorio(ConsultorioEntity consultorio) {
        return consultorioRepository.save(consultorio);
    }

    public List<ConsultorioEntity> listarConsultorios() {
        return consultorioRepository.findAll();
    }

    public List<ConsultorioEntity> listarConsultoriosDisponibles() {
        return consultorioRepository.findAllByDisponible(true);
    }

    public ConsultorioEntity obtenerConsultorio(Long id) {
        return consultorioRepository.findById(id).orElseThrow(() -> new RuntimeException("Consultorio no encontrado"));
    }

    public ConsultorioEntity toggleDisponible(Long id) {
        ConsultorioEntity consultorio = obtenerConsultorio(id);
        consultorio.setDisponible(!consultorio.getDisponible());
        return consultorioRepository.save(consultorio);
    }

}
