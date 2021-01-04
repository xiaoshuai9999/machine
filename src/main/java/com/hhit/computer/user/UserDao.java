package com.hhit.computer.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface  UserDao extends JpaRepository<User, Long> {
    public User findByName(String name);
}
