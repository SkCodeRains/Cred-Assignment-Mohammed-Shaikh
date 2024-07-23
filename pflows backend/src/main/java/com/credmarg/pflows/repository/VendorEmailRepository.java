package com.credmarg.pflows.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.credmarg.pflows.models.Emails;

public interface VendorEmailRepository extends JpaRepository<Emails, Long> {

}
