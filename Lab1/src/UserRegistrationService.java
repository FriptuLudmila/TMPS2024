public class UserRegistrationService {
    private final IUserRepository userRepository;
    private final IEmailService emailService;
    private final IPasswordEncryptor passwordEncryptor;

    public UserRegistrationService(IUserRepository userRepository, IEmailService emailService, IPasswordEncryptor passwordEncryptor) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.passwordEncryptor = passwordEncryptor;
    }

    // Register a new user
    public void registerUser(String name, String email, String password) {
        String encryptedPassword = passwordEncryptor.encrypt(password);
        User user = new User(name, email, encryptedPassword);
        userRepository.save(user);
        emailService.sendEmail(email, "Welcome!", "Thank you for registering, " + name + "!");
        System.out.println("User registration completed successfully.");
    }

    // Change user password
    public void changePassword(String email, String oldPassword, String newPassword) {
        // Retrieve the user by email
        User user = userRepository.findByEmail(email);
        if (user != null) {
            // Encrypt the old password
            String encryptedOldPassword = passwordEncryptor.encrypt(oldPassword);
            if (user.getEncryptedPassword().equals(encryptedOldPassword)) {
                // Encrypt and set the new password
                String encryptedNewPassword = passwordEncryptor.encrypt(newPassword);
                user.setEncryptedPassword(encryptedNewPassword);
                // Save the updated user
                userRepository.save(user);
                // Send a confirmation email
                emailService.sendEmail(email, "Password Changed", "Your password has been successfully updated.");
                System.out.println("Password changed successfully for user: " + user.getName());
            } else {
                System.out.println("Old password is incorrect.");
            }
        } else {
            System.out.println("User not found with email: " + email);
        }
    }
}

