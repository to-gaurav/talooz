package com.talooz.ms.finance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.talooz.ms.finance" })
// @EnableDiscoveryClient
public class FinanceMicroserviceServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinanceMicroserviceServerApplication.class, args);
	}
}
