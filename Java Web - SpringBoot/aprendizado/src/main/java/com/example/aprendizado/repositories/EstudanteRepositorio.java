package com.example.aprendizado.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.aprendizado.models.Estudante;

@Repository
public interface EstudanteRepositorio extends JpaRepository<Estudante, Long>{

    

}
