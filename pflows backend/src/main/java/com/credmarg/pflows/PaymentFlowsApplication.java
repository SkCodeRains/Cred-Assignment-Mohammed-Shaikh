package com.credmarg.pflows;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PaymentFlowsApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaymentFlowsApplication.class, args);
	}

	@Bean
	WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedMethods("*")
						.allowCredentials(false)
						.maxAge(3600)
						.allowedOrigins("*");
			}
		};
	}
}
