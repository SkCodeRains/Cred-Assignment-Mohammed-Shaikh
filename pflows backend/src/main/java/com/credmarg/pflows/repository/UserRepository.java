package com.credmarg.pflows.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.credmarg.pflows.models.Admin; 

public interface UserRepository extends JpaRepository<Admin, String> {

    Admin findByUsername(String username);

}
