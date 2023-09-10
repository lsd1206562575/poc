package com.laisd.controller;

import com.laisd.entity.User;
import com.laisd.service.UserService;
import com.laisd.util.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class IndexController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User sysUser = userService.findByUserName(user.getUserName());

        String password = user.getUserPassword();
        if (!password.equals(sysUser.getUserPassword())) {
            return null;
        }

        String token = JwtHelper.createToken(sysUser.getId().toString(), sysUser.getUserName());

        return ResponseEntity.ok(token);
    }

    @PostMapping("/save")
    public User addNewUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/updateUser/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody User user) {
        user.setId(userId);
        return userService.updateUser(user);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/findById/{userId}")
    public User getUserById(@PathVariable Long userId) {
        return userService.findById(userId);
    }

    @GetMapping("/findAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
