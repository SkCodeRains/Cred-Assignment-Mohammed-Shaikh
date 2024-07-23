package com.credmarg.pflows.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Vendor {
    @Id
    @Column(unique = true)
    private String email;
    
    private String name;


    @Column(unique = true)
    private String upi;
}
