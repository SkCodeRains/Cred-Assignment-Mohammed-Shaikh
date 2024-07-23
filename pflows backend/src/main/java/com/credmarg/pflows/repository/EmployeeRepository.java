package com.credmarg.pflows.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.credmarg.pflows.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
}