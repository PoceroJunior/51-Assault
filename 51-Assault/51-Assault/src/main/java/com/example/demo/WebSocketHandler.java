
package com.example.demo;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebSocketHandler extends TextWebSocketHandler {

	// Mapa concurrente para almacenar las sesiones de WebSocket activas
	private ConcurrentHashMap<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	/*private ConcurrentHashMap<WebSocketSession, WebSocketSession> games = new ConcurrentHashMap<>();*/
	
	// Manejador para convertir objetos Java a JSON y viceversa
	private ObjectMapper mapper = new ObjectMapper();
	// Nodo JSON para almacenar información sobre el host
	ObjectNode host = mapper.createObjectNode();
			
	// Método llamado después de establecer una nueva conexión
	//Despues de que se establezca una nueva sesion, sele asigna esta sesion al hashmap sessions
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New session: " + session.getId());
		// Inicializa el nodo JSON indicando que inicialmente no es host
		host.put("ishost","0");
		// Si no hay sesiones activas, esta sesión se convierte en el host
		if(sessions.isEmpty()) {
            sessions.put(session.getId(), session);
            host.put("ishost", "1");
        }
        else 
        { 
            sessions.put(session.getId(), session); 
        }
		
		// Actualiza y envía información del host
		System.out.println(sessions.size());
		host.put("sesionesActivas",""+sessions.size());
		System.out.println("host:" + host);
		//envia el mensaje al host
		session.sendMessage(new TextMessage(host.toString()));
		
		//sessions.hashCode();
		
	}
	
	// Método llamado después de cerrar una conexión
	//eliminas del hashmap la sesion que se ha desconectado concretamente
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		// Elimina la sesión cerrada del mapa de sesiones
		sessions.remove(session.getId());
	}
	
	//El más importante, crea un json node y lee el mensaje y llama a send info
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException
    {
		// Convierte el mensaje de texto a un nodo JSON
        JsonNode node = mapper.readTree(message.getPayload());

        // Envía la información del nodo a los demás clientes
        sendInfo(session, node);
    }
	
	//la informacion que tenemos en el servidor (obj object node, si el nodo esta lista y hacemos put con el nombre con el que queremos
	//guardar y como segundo valor con el valor que queremos introducirle (un get correspondiente del mensaje)
	private void sendInfo(WebSocketSession session, JsonNode node) throws IOException {
		
		// Crea un nodo JSON para almacenar la información que se enviará
		ObjectNode obj = mapper.createObjectNode();
		
		//poner cada una de las variables que hay que enviar
		// Comprueba y añade cada campo al nodo JSON si está presente en el mensaje recibido
	    if (node.has("ready")) {
	        obj.put("ready", node.get("ready").asBoolean());
	    }
	    if (node.has("x")) {
	        obj.put("x", node.get("x").asDouble());
	    }
	    if (node.has("y")) {
	        obj.put("y", node.get("y").asDouble());
	    }
	    if (node.has("weaponX")) {
	        obj.put("weaponX", node.get("weaponX").asDouble());
	    }
	    if (node.has("weaponY")) {
	        obj.put("weaponY", node.get("weaponY").asDouble());
	    }
	    if (node.has("flipX")) {
	        obj.put("flipX", node.get("flipX").asBoolean());
	    }
	    if (node.has("flipWeapon")) {
	        obj.put("flipWeapon", node.get("flipWeapon").asBoolean());
	    }
	    if (node.has("CaCAnimation")) {
	        obj.put("CaCAnimation", node.get("CaCAnimation").asText());
	    }
	    if (node.has("atacando1")) {
	        obj.put("atacando1", node.get("atacando1").asBoolean());
	    }
	    if (node.has("atacando2")) {
	        obj.put("atacando2", node.get("atacando2").asBoolean());
	    }
	    if (node.has("pausa")) {
	        obj.put("pausa", node.get("pausa").asBoolean());
	    }
	    
	    if (node.has("salirPausa")) {
	        obj.put("salirPausa", node.get("salirPausa").asBoolean());
	    }

	    // Envía el mensaje actualizado a todas las sesiones activas excepto a la que lo envió originalmente
		for(WebSocketSession participant : sessions.values()) {
			
            if(!participant.getId().equals(session.getId())) {
                participant.sendMessage(new TextMessage(obj.toString()));
            }
        }
		
	}
}
