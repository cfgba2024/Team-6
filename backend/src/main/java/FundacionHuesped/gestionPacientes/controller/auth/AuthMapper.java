package FundacionHuesped.gestionPacientes.controller.auth;

import FundacionHuesped.gestionPacientes.dto.auth.LoginRequestDTO;
import FundacionHuesped.gestionPacientes.dto.auth.RegisterRequestDTO;
import FundacionHuesped.gestionPacientes.model.ERole;
import FundacionHuesped.gestionPacientes.model.Usuario;
import jakarta.validation.Valid;

public class AuthMapper {
    public static Usuario LoginRequestToUser(@Valid LoginRequestDTO loginRequest) {
        return Usuario.builder()
                .username(loginRequest.getUsername())
                .password(loginRequest.getPassword())
                .build();
    }

    public static Usuario RegisterRequestToUser(@Valid RegisterRequestDTO registerRequest) {
        return Usuario.builder()
                .username(registerRequest.getUsername())
                .password(registerRequest.getPassword())
                .rol(ERole.valueOf(registerRequest.getRole().toUpperCase()))
                .build();
    }
}
