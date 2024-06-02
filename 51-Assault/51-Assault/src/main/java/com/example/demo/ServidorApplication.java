package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class ServidorApplication implements WebSocketConfigurer{

	// Aplicación Spring Boot
	public static void main(String[] args) {
		SpringApplication.run(ServidorApplication.class, args);
	}
	
	// Registra el manejador de WebSocket en la ruta "/user" permitiendo todo tipo de origen
	@Override
	public void registerWebSocketHandlers( WebSocketHandlerRegistry registry) 
	{ 
		registry.addHandler(createWebSocketHandler(), "/user").setAllowedOrigins("*");
	}
	
	// Crea una instancia del manejador de WebSocket
	@Bean
	public WebSocketHandler createWebSocketHandler() {
		return new WebSocketHandler();
	}
}
