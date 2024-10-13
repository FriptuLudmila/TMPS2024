public class User {
    private String name;
    private String email;
    private String encryptedPassword;

    public User(String name, String email, String encryptedPassword) {
        this.name = name;
        this.email = email;
        this.encryptedPassword = encryptedPassword;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEncryptedPassword() {
        return encryptedPassword;
    }

    public void setEncryptedPassword(String encryptedPassword) {
        this.encryptedPassword = encryptedPassword;
    }
}
