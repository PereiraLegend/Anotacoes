package com.testelucas.todosimple.services;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.testelucas.todosimple.models.User;
import com.testelucas.todosimple.repositories.UserRepository;
import com.testelucas.todosimple.security.UserSpringSecurity;

// Este arquivo faz parte da segurança, ou seja, quando eu crio a pasta "security" e "UserSpringSecurity.java" eu preciso criar um arquivo token para a validação, ai eu tembém crio uma service para essa nova funcionalidade 
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Esses métodos eu adiciono automáticamente apertendo encima da palavra "UserDetailsServiceImpl"
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userRepository.findByUsername(username);
        if (Objects.isNull(user))
            throw new UsernameNotFoundException("Usuário não encontrado " + username);
        return new UserSpringSecurity(user.getId(), user.getUsername(), user.getPassword(), user.getProfiles());
    }
    
}
