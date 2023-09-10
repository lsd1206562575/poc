package com.laisd;

import com.laisd.entity.User;
import com.laisd.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class UserDaoTest {

    @Autowired
    UserRepository userRepository;

    @Test
    public void getAll() {
        List<User> list = userRepository.findAll();
        for (User user : list) {
            System.out.println(user);
        }
    }

    @Test
    public void create() {
        User user = new User();
        user.setId(1L);
        user.setUserName("test1");
        user.setUserPassword("test1");
        userRepository.save(user);
    }

}
