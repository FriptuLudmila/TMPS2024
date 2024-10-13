public interface IUserRepository {
    void save(User user);
    User findByEmail(String email);
    void removeByEmail(String email);
}
