import java.util.HashMap;
import java.util.Map;

public class UserRepository implements IUserRepository {
    private final Map<String, User> userDatabase = new HashMap<>();

    @Override
    public void save(User user) {
        // Simulates saving to a database
        userDatabase.put(user.getEmail(), user);
        System.out.println("User '" + user.getName() + "' saved to the database with encrypted password: " + user.getEncryptedPassword());
    }

    @Override
    public User findByEmail(String email) {
        // Simulates retrieving a user by email
        System.out.println("Retrieving user with email: " + email);
        User user = userDatabase.get(email);
        if (user != null) {
            System.out.println("Found user '" + user.getName() + "' with encrypted password: " + user.getEncryptedPassword());
        } else {
            System.out.println("No user found with email: " + email);
        }
        return user;
    }

    @Override
    public void removeByEmail(String email) {
        // Simulates removing a user by email
        User removedUser = userDatabase.remove(email);
        if (removedUser != null) {
            System.out.println("User '" + removedUser.getName() + "' removed from the database.");
        } else {
            System.out.println("No user found with email: " + email + " to remove.");
        }
    }
}
