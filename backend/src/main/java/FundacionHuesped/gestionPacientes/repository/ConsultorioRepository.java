package FundacionHuesped.gestionPacientes.repository;

import FundacionHuesped.gestionPacientes.model.consultorio.ConsultorioEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultorioRepository extends JpaRepository<ConsultorioEntity, Long> {
    List<ConsultorioEntity> findAllByDisponible(Boolean disponible);
}
