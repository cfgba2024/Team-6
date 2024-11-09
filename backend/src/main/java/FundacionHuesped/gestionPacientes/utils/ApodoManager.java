package FundacionHuesped.gestionPacientes.utils;

import java.util.ArrayList;
import java.util.List;

public class ApodoManager {
    private final List<String> apodosDisponibles;
    private final List<String> apodosAsignados;

    public ApodoManager() {
        apodosDisponibles = new ArrayList<>();
        apodosAsignados = new ArrayList<>();

        // Lista de 80 apodos amigables y neutrales
        String[] apodos = {
                "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR",
                "BRL", "MXN", "RUB", "SAR", "KRW", "ZAR", "SEK", "NOK",
                "DKK", "PLN", "SGD", "TRY", "HUF", "IDR", "MYR", "THB",
                "PHP", "VND", "CZK", "RON", "BGN", "ISK", "ILS", "QAR",
                "KWD", "MAD", "EGP", "LKR", "PEN", "KZT", "UAH", "BDT",
                "CLP", "COP", "COP", "JOD", "NGN", "TWD", "PKR", "NZD",
                "BHD", "OMR", "TND", "AFN", "KMF", "MZN", "MNT", "TMT",
                "KYD", "BMD", "XOF", "XPF", "RSD", "MKD", "BAM", "GHS"
        };

        for (String apodo : apodos) {
            apodosDisponibles.add(apodo);
        }
    }

    // Método para asignar un apodo disponible
    public String asignarApodo() {
        if (apodosDisponibles.isEmpty()) {
            throw new RuntimeException("No hay apodos disponibles.");
        }
        String apodo = apodosDisponibles.remove(0);
        apodosAsignados.add(apodo);
        return apodo;
    }

    // Método para liberar un apodo cuando ya no esté en uso
    public void liberarApodo(String apodo) {
        if (apodosAsignados.remove(apodo)) {
            apodosDisponibles.add(apodo);
        }
    }
}