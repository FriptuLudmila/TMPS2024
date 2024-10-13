public class EmailService implements IEmailService {
    @Override
    public void sendEmail(String to, String subject, String body) {
        // Simulates sending an email
        System.out.println("Sending Email:");
        System.out.println("To: " + to);
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);
    }
}
