package com.desafioapi.desafioapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafioapi.desafioapi.models.Funcionario;
@Repository
public interface FuncionarioRepositorio extends JpaRepository<Funcionario, Long> {

    Funcionario findByUsername(String username);
    Optional<Funcionario> findById(Long id);
    boolean existsByUsername(String username);

}
