# SOLID PRINCIPLES
***
## Author : Friptu Ludmila
***
### Objectives
+ Implement 2 letters from SOLID
***

### Used SOLID Principles
1. ___Single Responsibility Principle (SRP)___\
 __SRP__ states that a class should have only one reason to change, meaning it should have one primary responsibility or job.
2. ___Dependency Inversion Principle (DIP)___\
__DIP__ states that High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).
***
### Implementation
1. __Implementation of__ ___SRP___\
In my project, every class designed to handle a specific aspect of the system, ensuring that responsibilities are well-separated. This helps enhance code readability and maintainability but also simplifies debugging and future feature additions.\
For example, the ___User___ class is responsible for representing and managing user data.\

  `public class User {`\
   `private String name;`\
   `private String email;`\
   `private String encryptedPassword;`

The UserRepository class is responsible for data storage and retrieval for ___User___ objects. The class has methods that save the user to the database or finds the user by email. 

`public class UserRepository implements IUserRepository {`\
`private final Map<String, User> userDatabase = new HashMap<>();`

The EmailService class manages the sending of emails. 

`public class EmailService implements IEmailService {`\
`@Override`\
`public void sendEmail(String to, String subject, String body) {`\
`System.out.println("Sending Email:");`\
`System.out.println("To: " + to);`\
`System.out.println("Subject: " + subject);`\
`System.out.println("Body: " + body);`\
`}
}`

The PasswordEncryptor class handles password encryption. \

`public class PasswordEncryptor implements IPasswordEncryptor {`\
`@Override`\
`public String encrypt(String password) {`\
`return Base64.getEncoder().encodeToString(password.getBytes());`\
`}
}`\

The UserRegistrationService manages user registration and password changes. 

`public class UserRegistrationService {`\
`private final IUserRepository userRepository;`\
`private final IEmailService emailService;`\
`private final IPasswordEncryptor passwordEncryptor;`\

#### Benefits of Implementing SRP 
+ Changes in one aspect don't impact other parts of the system.
+ Each class has a clear purpose, making the code easier to understand.
+ Isolated responsibilities allow for more straightforward unit testing of individual components.


2. __Implementation of__ ___DIP___

In my project, I separated high-level modules from low-level implementations by relying on interfaces. This design ensures that my system remains flexible and easily extendable, allowing for different implementations without altering the high-level logic.\
For example: 
+ The `UserRegistrationService` class depends on the interfaces `(IUserRepository, IEmailService, IPasswordEncryptor)` rather than their concrete implementations. This means that I can easily swap out `UserRepository` with another implementation without modifying `UserRegistrationService`.
+ High-level modules `(UserRegistrationService)` are separated from low-level modules `(UserRepository, EmailService, PasswordEncryptor)` through the use of interfaces. This promotes flexibility and scalability.


#### Benefits of Implementing DIP
+ Easily replace or modify low-level implementations without affecting high-level modules.
+ Components can be reused in different contexts by swapping out implementations.
+ Changes in low-level modules don't necessitate changes in high-level modules, reducing the risk of introducing bugs.

### Conclusion

This laboratory was a great hands-on application of what I learned about SOLID principles to create something usable and well-designed. The project was designed and implemented using the Single Responsibility Principle, Dependency Inversion Principle which resulted in excellent flexibility and modularity of it making a perfect place for future updates. 