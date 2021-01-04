package com.hhit.computer.student;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
@Data
public class Student {
    @Id
    private String no;
    private String name;
    private String sex;
    private String grade;
    private String major;
    private String clbum;
    private String year;

}
