package com.credmarg.pflows.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Employee {
    @Id
    private String email;
    private String name;
    private String designation;
    private double ctc;
}