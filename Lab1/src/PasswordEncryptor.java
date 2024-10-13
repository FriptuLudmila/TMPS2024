import java.util.Base64;

public class PasswordEncryptor implements IPasswordEncryptor {
    @Override
    public String encrypt(String password) {
        // Base64 encoding as encryption
        byte[] passwordBytes = password.getBytes();
        return Base64.getEncoder().encodeToString(passwordBytes);
    }
}
