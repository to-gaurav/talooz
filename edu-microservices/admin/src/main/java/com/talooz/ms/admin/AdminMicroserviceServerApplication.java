package com.talooz.ms.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.talooz.ms.admin" })
// @EnableDiscoveryClient
public class AdminMicroserviceServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminMicroserviceServerApplication.class, args);
	}
}
