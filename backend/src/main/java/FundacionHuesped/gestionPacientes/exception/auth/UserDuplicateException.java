package FundacionHuesped.gestionPacientes.exception.auth;

public class UserDuplicateException extends RuntimeException {
    public UserDuplicateException(String message) {
        super(message);
    }
}
