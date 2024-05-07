package com.desafioapi.desafioapi.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desafioapi.desafioapi.models.Usuario;
import com.desafioapi.desafioapi.service.UsuarioService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/user")
@Validated
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping()
    private ResponseEntity getAllUsuarios(){
        return ResponseEntity.ok("deucerto");
    }

    @GetMapping("/all")
    public List<Usuario> getAllUsers() {
        return usuarioService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Long id){
        Usuario obj = this.usuarioService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/ultimoid")
    public ResponseEntity<Long> getLastUserId() {
        Long lastUserId = usuarioService.getLastUserId();
        return ResponseEntity.ok(lastUserId);
    }
    
    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Usuario obj){
        Usuario usuario = this.usuarioService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Usuario obj, @PathVariable Long id) {
        /*
        if (!id.equals(obj.getId())){
            return ResponseEntity.badRequest().build();
        }
        */
        obj.setId(id);
        //Usuario usuario = this.usuarioService.update(obj);
        this.usuarioService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.usuarioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
