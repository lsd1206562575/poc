package com.laisd.service;

import com.laisd.entity.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();
    User findById(Long userId);
    User findByUserName(String userName);
    User saveUser(User user);
    User updateUser(User user);
    void deleteUser(Long userId);

}
