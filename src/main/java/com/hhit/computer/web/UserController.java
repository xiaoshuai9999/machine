package com.hhit.computer.web;

import com.alibaba.fastjson.JSONObject;
import com.hhit.computer.user.User;
import com.hhit.computer.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserDao userDao;

    @PostMapping("/login")
    public String userLogin(@RequestBody JSONObject jsonObject) {
        User user = userDao.findByName(jsonObject.getString("username"));
        if (user != null && jsonObject.getString("pwd").equals(user.getPassword())) {
            return "success";
        } else {
            return "failed";
        }
    }
}
