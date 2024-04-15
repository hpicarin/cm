package org.example.control_user.service;

import org.example.control_user.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    User saveUser(User user);

    Optional<User> checkUser(String name, String pass);

    List<User> getUsers();

    Optional<User> getUser(Long id);

    void deleteUser(Long id);

    void updateUser(User user);
}
