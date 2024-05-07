package com.desafioapi.desafioapi.controllers;

import java.net.URI;
import java.security.Provider.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desafioapi.desafioapi.models.Status;
import com.desafioapi.desafioapi.models.Usuario;
import com.desafioapi.desafioapi.service.StatusService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@Controller
@RequestMapping("/status")
public class StatusController {
    
    @Autowired
    private StatusService statusService;

    @GetMapping("/{id}")
    public ResponseEntity<Status> findById(@PathVariable Long id){
        Status obj = this.statusService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Status obj){
        Status status = this.statusService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(status.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Status obj, @PathVariable Long id) {
        /*
        if (!id.equals(obj.getId())){
            return ResponseEntity.badRequest().build();
        }
        */
        obj.setId(id);
        //Usuario usuario = this.usuarioService.update(obj);
        this.statusService.update(obj);
        return ResponseEntity.noContent().build();
    }
    
}
