package com.credmarg.pflows.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.credmarg.pflows.models.Vendor;
import com.credmarg.pflows.repository.VendorRepository;

@Service
public class VendorService {
    @Autowired
    private VendorRepository vendorRepository;

    public Vendor saveVendor(Vendor vendor) {
        if (vendorRepository.isExist(vendor.getEmail(), vendor.getUpi())) {
            return null;
        }
        return vendorRepository.save(vendor);
    }

    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }
}
