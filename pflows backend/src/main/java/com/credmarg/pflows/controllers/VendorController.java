package com.credmarg.pflows.controllers;

import java.util.List;
 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.credmarg.pflows.models.Emails;
import com.credmarg.pflows.models.Vendor;
import com.credmarg.pflows.services.EmailService;
import com.credmarg.pflows.services.VendorService;

import lombok.AllArgsConstructor; 

@RestController
@RequestMapping("/vendors")
@AllArgsConstructor
public class VendorController {

    private VendorService vendorService;

    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Object> createVendor(@RequestBody Vendor vendor) {
        Vendor result = vendorService.saveVendor(vendor);
        if (result != null) {
            return ResponseEntity.ok().body(result);
        }
        String errorMessage = "Email or UPI already exists.";
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorMessage);
    }

    @GetMapping
    public List<Vendor> getAllVendors() {
        return vendorService.getAllVendors();
    }

    @PostMapping("/send-emails")
    public ResponseEntity<Object> sendEmails(@RequestBody List<Emails> emails) {
        emailService.sendEmail(emails);
        emailService.saveVendorEmails(emails);
        return new ResponseEntity<>("Emails saved successfully", HttpStatus.CREATED);
    }

    @GetMapping("/mails")
    public ResponseEntity<Object> getMethodName() {
        List<Emails> emailsList = emailService.getAllEmails();
        return ResponseEntity.ok().body(emailsList);
    }

}