package com.desafioapi.desafioapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Funcionario;
import com.desafioapi.desafioapi.repositories.FuncionarioRepositorio;


@Service
public class FuncionarioService {
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;
    
    public Funcionario findById(Long id){
        Optional<Funcionario> funcionario = this.funcionarioRepositorio.findById(id);
        return funcionario.orElseThrow(() -> new RuntimeException("Funcionário não encontrado! Id: " + id ));

    }
    
    @Transactional
    public Funcionario create(Funcionario obj){
        obj.setId(null);
        obj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword()));
        obj.setPassword(obj.getPassword());

        obj = this.funcionarioRepositorio.save(obj);
        return obj;
    }

    /*
    @Transactional
    public Funcionario update(Funcionario obj){
        Funcionario newObj = findById(obj.getId());
        newObj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword()));
        return this.funcionarioRepositorio.save(newObj);
    }
    */

    @Transactional
    public Funcionario update(Funcionario funcionario) {
        findById(funcionario.getId());
        funcionario.setPassword(bCryptPasswordEncoder.encode(funcionario.getPassword()));
        return funcionarioRepositorio.save(funcionario);
    }
    

    @Transactional
    public void delete(Long id){
        findById(id);
        try {
            this.funcionarioRepositorio.deleteById(id);
        } catch (Exception e) {
            new RuntimeException("Não foi possivel excluir o funcionário");
        }
    }
    
}
