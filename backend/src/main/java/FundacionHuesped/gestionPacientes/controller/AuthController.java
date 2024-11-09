package FundacionHuesped.gestionPacientes.controller;

import FundacionHuesped.gestionPacientes.dto.auth.LoginRequestDTO;
import FundacionHuesped.gestionPacientes.dto.auth.RegisterRequestDTO;
import FundacionHuesped.gestionPacientes.dto.auth.TokenResponseDTO;
import FundacionHuesped.gestionPacientes.model.Usuario;
import FundacionHuesped.gestionPacientes.service.AuthService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
@Slf4j
public class AuthController {


    public static final String LOGIN_URL = "/api/v1/auth/login";
    public static final String REGISTER_URL = "/api/v1/auth/register";
    public static final String METHOD_POST = "POST";
    public static final String CONTENT_TYPE_JSON = "application/json";
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequestDTO loginRequest) {
        Usuario user = AuthMapper.LoginRequestToUser(loginRequest);
        String token = authService.login(user);
        TokenResponseDTO response = TokenResponseDTO.builder().token(token).build();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<TokenResponseDTO> register(@RequestBody @Valid RegisterRequestDTO registerRequest){
        Usuario newUserFromRequest = AuthMapper.RegisterRequestToUser(registerRequest);
        String token = authService.register(newUserFromRequest);
        TokenResponseDTO response = TokenResponseDTO.builder().token(token).build();
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}