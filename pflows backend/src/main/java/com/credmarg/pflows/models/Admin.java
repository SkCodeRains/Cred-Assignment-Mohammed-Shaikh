package com.credmarg.pflows.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
    @Id 
    private String username;
    @Column(nullable = false)
    private String role;
    @Column(nullable = false)
    private String password;
}
