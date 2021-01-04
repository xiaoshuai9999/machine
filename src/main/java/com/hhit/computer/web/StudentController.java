package com.hhit.computer.web;

import com.hhit.computer.student.Student;
import com.hhit.computer.student.StudentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("student")
public class StudentController  {
    @Autowired
    private StudentDao studentDao;

    @GetMapping("all/list")
    public List<Student> getAllStudent(@RequestParam(required = false) String name, @RequestParam(required = false) String no) {
        if (StringUtils.isEmpty(name) && StringUtils.isEmpty(no)) {
            return studentDao.findAll();
        } else {
            return studentDao.findStudentsByNameOrNo(name, no);
        }
    }
}
