package com.desafioapi.desafioapi.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Usuario;
import com.desafioapi.desafioapi.repositories.UsuarioRepositorio;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;


@Service
public class UsuarioService {
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @PersistenceContext
    private EntityManager entityManager;
    
    public Usuario findById(Long id){
        Optional<Usuario> usuario = this.usuarioRepositorio.findById(id);
        return usuario.orElseThrow(() -> new RuntimeException("Usuário não encontrado! Id: " + id ));

    }

    public List<Usuario> getAllUsers() {
        return usuarioRepositorio.findAll(); 
    }

    public Long getLastUserId() {
        String sqlQuery = "SELECT MAX(id) FROM Usuario";
        return entityManager.createQuery(sqlQuery, Long.class).getSingleResult();
    }    
    
    @Transactional
    public Usuario create(Usuario obj){
        obj.setId(null);
        obj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword()));
        obj.setPassword(obj.getPassword());

        obj = this.usuarioRepositorio.save(obj);
        return obj;
    }

    @Transactional
    public Usuario update(Usuario obj) {
        findById(obj.getId());
        obj.setPassword(bCryptPasswordEncoder.encode(obj.getPassword()));

        return usuarioRepositorio.save(obj);
    }
    

    @Transactional
    public void delete(Long id){
        findById(id);
        try {
            this.usuarioRepositorio.deleteById(id);
        } catch (Exception e) {
            new RuntimeException("Não foi possivel excluir o usuário");
        }
    }

    private String gerarCodigoUnico(){
        Random aleatorio = new Random();
        StringBuilder codigo = new StringBuilder();
        for (int i = 0; i < 10; i++){
            codigo.append(aleatorio.nextInt(10));
        }
        codigo.append("PI");
        return codigo.toString();
    }
    
}
