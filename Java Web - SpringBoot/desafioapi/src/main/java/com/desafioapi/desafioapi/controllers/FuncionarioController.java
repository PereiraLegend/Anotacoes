package com.desafioapi.desafioapi.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desafioapi.desafioapi.models.Funcionario;
import com.desafioapi.desafioapi.service.FuncionarioService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/funcionario")
@Validated
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping()
    private ResponseEntity getAllFuncionarios(){
        return ResponseEntity.ok("deucerto");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Funcionario> findById(@PathVariable Long id){
        Funcionario obj = this.funcionarioService.findById(id);
        return ResponseEntity.ok().body(obj);
    }
    
    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Funcionario obj){
        Funcionario funcionario = this.funcionarioService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(funcionario.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Funcionario obj, @PathVariable Long id) {
        obj.setId(id);
        this.funcionarioService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.funcionarioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
