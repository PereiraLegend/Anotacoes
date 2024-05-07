package com.desafioapi.desafioapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Status;
import com.desafioapi.desafioapi.models.Usuario;
//import java.util.List;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {
    //@Transactional(readOnly = true)
    //Usuario findByUsername(String username);

    //Usuario update(Usuario usuario); //
    Optional<Usuario> findById(Long id);

    //void save(Status status);

}
