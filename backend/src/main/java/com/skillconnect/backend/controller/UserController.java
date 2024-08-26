package com.skillconnect.backend.controller;

import com.skillconnect.backend.model.User;
import com.skillconnect.backend.model.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;

@RestController
@Service
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void createUser(@RequestBody User user) {
        user.setCreatedAt(new Date());
        user.setUpdatedAt(new Date());
        userRepository.save(user);
    }

}
