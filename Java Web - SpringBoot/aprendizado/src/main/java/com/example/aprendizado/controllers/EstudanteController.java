package com.example.aprendizado.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.aprendizado.services.EstudanteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/estudante")
@Validated
public class EstudanteController {
    
    @Autowired
    private EstudanteService estudanteService;

    @GetMapping()
    public ResponseEntity getAllEstudantes(){
        return ResponseEntity.ok("Deu certo!");
    }
    
}
