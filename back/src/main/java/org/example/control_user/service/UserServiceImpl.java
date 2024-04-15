package org.example.control_user.service;

import org.example.control_user.entity.User;
import org.example.control_user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public Optional<User> getUser(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void updateUser(User user) {
        userRepository.save(user);
        /*Optional<User> _user = userRepository.findById(user.getIdUser());
        _user.ifPresent(u -> u.setName(user.getName()));

        userRepository.save(_user);

        userRepository.updateUser(
                user.getIdUser(),
                user.getName(),
                user.getLastname(),
                user.getPassword(),
                user.getCountry(),
                user.getAvatar(),
                user.getRol().getIdRol());*/
    }

    @Override
    public Optional<User> checkUser(String name, String pass){
        User user = userRepository.getUsersByNameAndPassword(name,pass);
        Optional<User> resp = Optional.ofNullable(user);
        if (resp.isPresent()){
            //resp //aqui remover el pass
        }
        return resp;
    }
}
