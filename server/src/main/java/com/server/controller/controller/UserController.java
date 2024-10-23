package com.server.controller.controller;

import com.server.model.entity.User;
import com.server.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAll() {
        return userService.findAll();
    }

    @GetMapping("/users/{userId}")
    public User getUser(@PathVariable String userId) {
        User user = userService.findById(userId);
        if (user == null) {
            throw new RuntimeException("User id not found - " + userId);
        }
        return user;
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        if (userService.findAllId().contains(user.getUser_id())) {
            throw new IllegalArgumentException("User with this ID already exists!");
        } else {
            User dbUser = userService.save(user);
            return dbUser;
        }
    }

    @PutMapping("/users")
    public User saveUser(@RequestBody User user) {
        if (userService.findAllId().contains(user.getUser_id())) {
            throw new IllegalArgumentException("User with this ID already exists!");
        } else {
            User dbUser = userService.save(user);
            return dbUser;
        }
    }

    @DeleteMapping("/users/{userId}")
    public String deleteUser(@PathVariable String userId) {
        User dbUser = userService.findById(userId);
        if (dbUser == null) {
            throw new RuntimeException("User id not found - " + userId);
        }
        userService.deleteById(userId);
        return "Deleted user id - " + userId;
    }
}