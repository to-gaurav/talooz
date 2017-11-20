package com.talooz.ms.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.talooz.ms.users" })
// @EnableDiscoveryClient
public class UsersMicroserviceServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsersMicroserviceServerApplication.class, args);
	}
}
