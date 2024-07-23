package com.credmarg.pflows.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.credmarg.pflows.models.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, String> {
    
    @Query("SELECT CASE WHEN COUNT(v) > 0 THEN true ELSE false END FROM Vendor v WHERE v.email = :email OR v.upi = :upi")
    boolean isExist(@Param("email") String email, @Param("upi") String upi);

}