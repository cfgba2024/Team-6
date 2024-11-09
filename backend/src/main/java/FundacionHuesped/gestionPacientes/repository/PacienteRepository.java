package FundacionHuesped.gestionPacientes.repository;

import FundacionHuesped.gestionPacientes.model.PacienteModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<PacienteModel, Long> {
    boolean existsByNombreIgnoreCase(String nombre);
}
