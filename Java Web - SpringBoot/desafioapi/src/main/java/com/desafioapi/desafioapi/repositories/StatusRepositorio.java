package com.desafioapi.desafioapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafioapi.desafioapi.models.Status;

public interface StatusRepositorio extends JpaRepository<Status, Long>{
    
}
