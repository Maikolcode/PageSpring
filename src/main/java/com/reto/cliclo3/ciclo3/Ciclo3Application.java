package com.reto.cliclo3.ciclo3;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

//sudo firewall-cmd --zone=public -add-port=8080/tcp --permanent -> Open port 8080
//sudo netstat -plten -> Information ports open or in process
//sudo kill -9 numproces -> Kill the process

@EntityScan(basePackages = {"com.reto.cliclo3.ciclo3.model"})
@SpringBootApplication
public class Ciclo3Application {

	public static void main(String[] args) {
		SpringApplication.run(Ciclo3Application.class, args);
	}

}
