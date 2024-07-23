package com.credmarg.pflows.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.credmarg.pflows.models.Admin;
import com.credmarg.pflows.repository.UserRepository;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*")
@RestController
public class JwtAuthenticationController {

    private final JwtTokenService tokenService;
    private final UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public JwtAuthenticationController(JwtTokenService tokenService,
            UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<Object> generateToken(@RequestBody Admin jwtTokenRequest, HttpServletResponse response) {
        Admin admin = userRepository.findByUsername(jwtTokenRequest.getUsername());
        if (admin == null) {
            @Data
            @AllArgsConstructor
            class ApiResponse {
                private boolean status;
                private String message;
            }
            ApiResponse respones = new ApiResponse(false, "User Not Exists");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(respones);
        }

        // Validate password
        if (!passwordEncoder.matches(jwtTokenRequest.getPassword(), admin.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        @AllArgsConstructor
        @Getter
        class AuthResponse {
            private String username;
            private String token;
            private String status;
            private String role;
        }

        // Generate token
        String token = tokenService.generateToken(admin);
        response.addCookie(new Cookie("authToken", token));
        AuthResponse responseResult = new AuthResponse(admin.getUsername(), token, "Successfull", admin.getRole());
        return ResponseEntity.ok(responseResult);
    }

    @GetMapping("/validateToken")
    public ResponseEntity<Boolean> getMethodName(@RequestParam String param) {
        return ResponseEntity.ok().body(true);
    }

}
