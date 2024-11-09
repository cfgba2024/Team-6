package FundacionHuesped.gestionPacientes.service;

import FundacionHuesped.gestionPacientes.exception.auth.UserDuplicateException;
import FundacionHuesped.gestionPacientes.model.Usuario;
import FundacionHuesped.gestionPacientes.repository.UsuarioRepository;
import FundacionHuesped.gestionPacientes.service.jwt.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public String login(Usuario user){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(),
                        user.getPassword()
                ));

        Usuario userFromDb = usuarioRepository.findByUsername(user.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        final String token = jwtService.generateToken(userFromDb);
        return token;
    }

    public String register(Usuario user) {

        if (usuarioRepository.existsByUsernameIgnoreCase(user.getUsername())) {
            throw new UserDuplicateException("Usuario duplicado");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Usuario createdUser = usuarioRepository.save(user);
        String token = jwtService.generateToken(createdUser);
        return token;
    }
}
