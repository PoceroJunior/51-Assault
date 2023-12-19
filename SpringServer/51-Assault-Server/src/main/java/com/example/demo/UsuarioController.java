package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {



    private static List<Usuario> listaUsuarios = new ArrayList<>();
    private static long contadorId = 0;


    @GetMapping("/{userId}")
    public ResponseEntity<String> getUserById(@PathVariable Long userId) {
        Usuario usuario = obtenerUsuarioPorId(userId);

        if (usuario != null) {
            String mensaje = "ID: " + usuario.getId() +
                             ", Nombre: " + usuario.getNombre() +
                             ", Contraseña: " + usuario.getContrasena();

            return ResponseEntity.ok("Información del usuario: " + mensaje);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Usuario nuevoUsuario) {
        // Agregar lógica para guardar el nuevo usuario en la lista o en la base de datos.
        nuevoUsuario.setId(contadorId++);

        listaUsuarios.add(nuevoUsuario);
        saveInFile(nuevoUsuario);

        return ResponseEntity.ok("Usuario registrado exitosamente");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Usuario usuario) {
    	if (verificarLogin(usuario.getNombre(), usuario.getContrasena())) {
            return new ResponseEntity<>("Inicio de sesión exitoso", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Credenciales incorrectas", HttpStatus.UNAUTHORIZED);
        }
    }
    
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long userId) {
        Usuario usuarioAEliminar = obtenerUsuarioPorId(userId);

        if (usuarioAEliminar != null) {
            listaUsuarios.remove(usuarioAEliminar);
            return ResponseEntity.ok("Usuario eliminado exitosamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Usuario>> getAllUsers() {
        return ResponseEntity.ok(listaUsuarios);
    }

    // Método de ejemplo para obtener un usuario por ID
    private Usuario obtenerUsuarioPorId(Long userId) {
        return listaUsuarios.stream()
                .filter(usuario -> usuario.getId().equals(userId))
                .findFirst()
                .orElse(null);
    }

    
    private void saveInFile(Usuario usuario) {
        try (FileWriter writer = new FileWriter("usuarios.txt", true)) {
            writer.write(usuario.getNombre() + " " + usuario.getContrasena() + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private boolean verificarLogin(String usuario, String contrasena) {
        try {
            List<String> lines = Files.readAllLines(Paths.get("usuarios.txt"));
            for (String line : lines) {
                String[] parts = line.split(" ");
                if (parts.length == 2) {
                    String storedUsuario = parts[0].trim();
                    String storedContrasena = parts[1].trim();

                    System.out.println("Stored: " + storedUsuario + " " + storedContrasena);
                    System.out.println("Provided: " + usuario + " " + contrasena);

                    //Verificar si las credenciales coinciden
                    if (storedUsuario.equals(usuario) && storedContrasena.equals(contrasena)) {
                        return true;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return false;
    }
}