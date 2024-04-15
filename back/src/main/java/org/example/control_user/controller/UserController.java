package org.example.control_user.controller;

import org.example.control_user.entity.Rol;
import org.example.control_user.entity.User;
import org.example.control_user.service.RolService;
import org.example.control_user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="/v1/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    RolService rolService;


    @PostMapping(path = "/")
    public long saveUser(@RequestBody User persona){return userService.saveUser(persona).getIdUser(); }

    @GetMapping(path="/check")
    public @ResponseBody Optional<User> checkUserbyName(@Param("name") String name, @Param("pass") String pass) {
        return userService.checkUser(name,pass);
    }

    @GetMapping(path="/{userid}")
    public @ResponseBody Optional<User> getUserbyId(@PathVariable("userid") Long userid) {
        return userService.getUser(userid);
    }

    @GetMapping(path="/")
    public @ResponseBody List<User> getAllUsers() {
        return userService.getUsers();
    }

    @DeleteMapping("/{userid}")
    public void deleteUser(@PathVariable("userid") Long userid)
    {
        userService.deleteUser(userid);
    }

    @PutMapping("/")
    public void updateUser(@RequestBody User user){userService.updateUser(user);}
}
