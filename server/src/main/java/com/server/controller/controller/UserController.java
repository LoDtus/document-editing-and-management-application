package com.server.controller.controller;

import com.server.model.entity.Role;
import com.server.model.entity.User;
import com.server.service.role.RoleService;
import com.server.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private UserService userService;
    private RoleService roleService;

    public UserController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/users")
    public List<User> getAll() {
        return userService.findAll();
    }

    @GetMapping("users/check/{userId}")
    public boolean checkExists(@PathVariable String userId) {
        User user = userService.findById(userId);
        return user != null;
    }

    @GetMapping("/users/{userId}/{userPassword}")
    public boolean signIn(@PathVariable String userId, @PathVariable String userPassword) {
        User user = userService.findById(userId);
        if (user == null)
            return false;
        return(user.getUser_password().equals(userPassword));
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        User result = userService.findById(user.getUser_id());
        if (result != null) {
            throw new IllegalArgumentException("User with this ID already exists!");
        }
        User dbUser = userService.save(user);

        Role dbRole = new Role();
        dbRole.setUser_id(user.getUser_id());
        dbRole.setRole("GUEST");
        roleService.save(dbRole);

        return dbUser;
    }

    @PutMapping("/users")
    public User saveUser(@RequestBody User user) {
        User result = userService.findById(user.getUser_id());
        if (result == null) {
            throw new IllegalArgumentException("User id not found - " + user.getUser_id());
        }
        return userService.save(user);
    }

    @DeleteMapping("/users/{userId}")
    public String deleteUser(@PathVariable String userId) {
        User dbUser = userService.findById(userId);
        if (dbUser == null) {
            throw new RuntimeException("User id not found - " + userId);
        }
        roleService.deleteById(userId);
        userService.deleteById(userId);
        return "Deleted user id - " + userId;
    }
}