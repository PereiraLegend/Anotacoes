package com.example.aprendizado.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.aprendizado.models.Estudante;
import com.example.aprendizado.repositories.EstudanteRepositorio;

import jakarta.transaction.Transactional;

@Service
public class EstudanteService {

    @Autowired
    private EstudanteRepositorio estudanteRepositorio;

    @Transactional
    public Estudante create(Estudante obj){
        obj.setId(null);
        obj = this.estudanteRepositorio.save(obj);
        return obj;
    }
    
}
