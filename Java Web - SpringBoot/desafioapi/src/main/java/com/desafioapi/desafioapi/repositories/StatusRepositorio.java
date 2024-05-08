package com.desafioapi.desafioapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafioapi.desafioapi.models.Status;
import com.desafioapi.desafioapi.models.Usuario;

public interface StatusRepositorio extends JpaRepository<Status, Long>{
    Optional<Status> findById(Long id);

    boolean existsByCodigounico(String codigo);
}
