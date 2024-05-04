package com.desafioapi.desafioapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Funcionario;
//import java.util.List;


@Repository
public interface FuncionarioRepositorio extends JpaRepository<Funcionario, Long> {
    //@Transactional(readOnly = true)
    //Funcionario findByUsername(String username);

    //Funcionario update(Funcionario Funcionario); //
    Optional<Funcionario> findById(Long id);

}
