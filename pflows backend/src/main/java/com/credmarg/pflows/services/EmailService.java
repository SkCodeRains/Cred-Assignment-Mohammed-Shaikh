package com.credmarg.pflows.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.credmarg.pflows.models.Emails;
import com.credmarg.pflows.repository.VendorEmailRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmailService {

    private VendorEmailRepository vendorEmailRepository;

    public void sendEmail(List<Emails> vendors) {
        for (Emails vendor : vendors) {
            System.out.println("Sending payments to vendor " + vendor.getName() + " at upi " + vendor.getUpi());
            System.out.println("Message : " + vendor.getMessage());
            System.out.println();
        }
    }

    public List<Emails> saveVendorEmails(List<Emails> emails) {
        return vendorEmailRepository.saveAll(emails);
    }

    public List<Emails> getAllEmails() {
        return vendorEmailRepository.findAll();
    }
}