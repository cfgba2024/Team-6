package FundacionHuesped.gestionPacientes.repository;

import FundacionHuesped.gestionPacientes.model.Lista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListaEsperaRepository extends JpaRepository<Lista, Long> {
}
