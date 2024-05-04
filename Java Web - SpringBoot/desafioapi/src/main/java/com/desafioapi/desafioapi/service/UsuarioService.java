package com.desafioapi.desafioapi.service;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Funcionario;
import com.desafioapi.desafioapi.models.Usuario;
import com.desafioapi.desafioapi.repositories.UsuarioRepositorio;


@Service
public class UsuarioService {
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    
    public Usuario findById(Long id){
        Optional<Usuario> usuario = this.usuarioRepositorio.findById(id);
        return usuario.orElseThrow(() -> new RuntimeException("Usuário não encontrado! Id: " + id ));

    }
    
    @Transactional
    public Usuario create(Usuario obj){
        obj.setId(null);
        obj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword()));
        obj.setPassword(obj.getPassword());

        obj = this.usuarioRepositorio.save(obj);
        return obj;
    }
    /*
    @Transactional
    public Usuario update(Usuario obj){
        Usuario newObj = findById(obj.getId());
        newObj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword()));
        return this.usuarioRepositorio.save(newObj);
    }
    */
    @Transactional
    public Usuario update(Usuario obj) {
        findById(obj.getId());
        obj.setPassword(bCryptPasswordEncoder.encode(obj.getPassword()));
        if("ATIVO".equals(obj.getStatus())){
            obj.setCodigounico(gerarCodigoUnico());
        } else {
            obj.setCodigounico("");
        }
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
    /*
    public void atualizaCodigoUnico(Usuario obj){
        if("ATIVO".equals(obj.getStatus())){
            obj.setCodigounico(gerarCodigoUnico());
        } else {
            obj.setCodigounico("");
        }
        usuarioRepositorio.save(obj);
    }
    */

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
