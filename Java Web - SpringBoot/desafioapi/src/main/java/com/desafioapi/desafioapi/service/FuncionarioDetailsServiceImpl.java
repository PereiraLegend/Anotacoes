package com.desafioapi.desafioapi.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.desafioapi.desafioapi.models.Funcionario;
import com.desafioapi.desafioapi.repositories.FuncionarioRepositorio;
import com.desafioapi.desafioapi.security.FuncionarioSpringSecurity;

@Service
public class FuncionarioDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private FuncionarioRepositorio funcionarioRepositorio;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Funcionario user = this.funcionarioRepositorio.findByUsername(username);
        if (Objects.isNull(user))
            throw new UsernameNotFoundException("Usuário não encontrado: " + username);
        return new FuncionarioSpringSecurity(user.getId(), user.getUsername(), user.getPassword());
    }

}