import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        IUserRepository userRepository = new UserRepository();
        IEmailService emailService = new EmailService();
        IPasswordEncryptor passwordEncryptor = new PasswordEncryptor();

        UserRegistrationService registrationService = new UserRegistrationService(
                userRepository, emailService, passwordEncryptor
        );

        Scanner scanner = new Scanner(System.in);
        boolean exit = false;

        while (!exit) {
            // Display the menu
            System.out.println("\n=== User Management System ===");
            System.out.println("1. Register New User");
            System.out.println("2. Update User Information");
            System.out.println("3. Change User Password");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            // Get user choice
            String choice = scanner.nextLine();

            switch (choice) {
                case "1" -> {
                    // Register New User
                    System.out.print("Enter name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter email: ");
                    String email = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String password = scanner.nextLine();
                    registrationService.registerUser(name, email, password);
                }
                case "2" -> {
                    // Update User Information
                    System.out.print("Enter current email: ");
                    String currentEmail = scanner.nextLine();
                    User userToUpdate = userRepository.findByEmail(currentEmail);
                    if (userToUpdate != null) {
                        System.out.print("Enter new name (leave blank to keep current): ");
                        String newName = scanner.nextLine();

                        System.out.print("Enter new email (leave blank to keep current): ");
                        String newEmail = scanner.nextLine();

                        boolean emailChanged = false;

                        if (!newName.isEmpty()) {
                            userToUpdate.setName(newName);
                        }
                        if (!newEmail.isEmpty() && !newEmail.equals(currentEmail)) {
                            userToUpdate.setEmail(newEmail);
                            emailChanged = true;
                        }

                        if (emailChanged) {
                            // Remove the old entry and save the updated user with the new email
                            userRepository.removeByEmail(currentEmail);
                            userRepository.save(userToUpdate);
                        } else {
                            // If email is not changed, just save the updated user
                            userRepository.save(userToUpdate);
                        }

                        System.out.println("User information updated successfully.");
                    } else {
                        System.out.println("User not found.");
                    }
                }
                case "3" -> {
                    // Change User Password
                    System.out.print("Enter email: ");
                    String userEmail = scanner.nextLine();
                    System.out.print("Enter old password: ");
                    String oldPassword = scanner.nextLine();
                    System.out.print("Enter new password: ");
                    String newPassword = scanner.nextLine();
                    registrationService.changePassword(userEmail, oldPassword, newPassword);
                }
                case "4" -> {
                    // Exit
                    exit = true;
                    System.out.println("Exiting the application. Goodbye!");
                }
                default -> System.out.println("Invalid choice. Please select an option from 1 to 4.");
            }
        }

        scanner.close();
    }
}
