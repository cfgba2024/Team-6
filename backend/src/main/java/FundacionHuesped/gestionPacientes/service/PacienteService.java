package FundacionHuesped.gestionPacientes.service;

import FundacionHuesped.gestionPacientes.exception.paciente.PacienteDuplicadoException;
import FundacionHuesped.gestionPacientes.exception.paciente.PacienteNoEncontradoException;
import FundacionHuesped.gestionPacientes.model.PacienteModel;
import FundacionHuesped.gestionPacientes.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {

  @Autowired
  private PacienteRepository pacienteRepository;

  public void validarSiExistePacientePorDni(String dni) {
    if (pacienteRepository.existsByDni(dni)) {
      throw new RuntimeException("El paciente con DNI " + dni + " ya existe");
    }
  }

  public List<PacienteModel> obtenerPacientes() {
    return pacienteRepository.findAll();
  }


    public PacienteModel obtenerPacientePorId(Long id) {
        return pacienteRepository.findById(id).get();
    }

  public PacienteModel agregarPaciente(PacienteModel pacienteModel) throws PacienteNoEncontradoException, PacienteDuplicadoException{
    return pacienteRepository.save(pacienteModel);
  }

  public PacienteModel actualizarPaciente(Long id, PacienteModel pacienteModel) {
    PacienteModel pacienteDb = pacienteRepository.findById(id).get();
    if(pacienteModel.getNombre() != null && !"".equalsIgnoreCase(pacienteModel.getNombre())){
      pacienteDb.setNombre(pacienteModel.getNombre());
    }

    if(pacienteModel.getApellido() != null && !"".equalsIgnoreCase(pacienteModel.getApellido())){
      pacienteDb.setApellido(pacienteModel.getApellido());
    }
    if(pacienteModel.getDni() != null && !"".equalsIgnoreCase(pacienteModel.getDni())){
      pacienteDb.setDni(pacienteModel.getDni());
    }
    if(pacienteModel.getEmail() != null && !"".equalsIgnoreCase(pacienteModel.getEmail())){
      pacienteDb.setEmail(pacienteModel.getEmail());
    }
    if(pacienteModel.getTelefono() != null && !"".equalsIgnoreCase(pacienteModel.getTelefono())){
      pacienteDb.setTelefono(pacienteModel.getTelefono());
    }
    if(pacienteModel.getDireccion() != null && !"".equalsIgnoreCase(pacienteModel.getDireccion())){
      pacienteDb.setDireccion(pacienteModel.getDireccion());
    }
    if(pacienteModel.getApodo() != null && !"".equalsIgnoreCase(pacienteModel.getApodo())){
      pacienteDb.setApodo(pacienteModel.getApodo());
    }
    if(pacienteModel.getObraSocial() != null && !"".equalsIgnoreCase(pacienteModel.getObraSocial())){
      pacienteDb.setObraSocial(pacienteModel.getObraSocial());
    }
    if(pacienteModel.getNumeroAfiliado() != null && !"".equalsIgnoreCase(pacienteModel.getNumeroAfiliado())){
      pacienteDb.setNumeroAfiliado(pacienteModel.getNumeroAfiliado());
    }
    return pacienteRepository.save(pacienteDb);
  }

  public void eliminarPacientePorId(Long id) {
    pacienteRepository.deleteById(id);
  }
}
