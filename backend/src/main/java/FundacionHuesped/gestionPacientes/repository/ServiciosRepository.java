package FundacionHuesped.gestionPacientes.repository;

import FundacionHuesped.gestionPacientes.model.servicios.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiciosRepository extends JpaRepository<Servicio, Long> {
}
