package com.hhit.computer.student;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentDao extends JpaRepository<Student, String> {
    List<Student> findStudentsByNameOrNo(String name, String no);
}
