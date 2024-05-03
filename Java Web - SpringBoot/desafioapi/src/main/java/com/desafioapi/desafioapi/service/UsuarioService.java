package com.desafioapi.desafioapi.service;

import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Usuario;
import com.desafioapi.desafioapi.repositories.UsuarioRepositorio;


@Service
public class UsuarioService {
    
    //@Autowired
    //private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    
    public Usuario procurarporId(Long id){
        Optional<Usuario> usuario = this.usuarioRepositorio.procurarporId(id);
        return usuario.orElseThrow(() -> new RuntimeException("Usuário não encontrado! Id: " + id ));

    }
    

    @Transactional
    public Usuario create(Usuario obj){
        obj.setId(null);
        //obj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword())); //
        //obj.setPassword(obj.getPassword());

        obj = this.usuarioRepositorio.save(obj);
        return obj;

    }
    
}
