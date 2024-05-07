package com.desafioapi.desafioapi.service.Listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.desafioapi.desafioapi.models.Status;
import com.desafioapi.desafioapi.models.Usuario;
import com.desafioapi.desafioapi.repositories.StatusRepositorio;
import com.desafioapi.desafioapi.repositories.UsuarioRepositorio;

import jakarta.persistence.PostPersist;

@Component
public class UsuarioListener {
    /*
    @Autowired
    private StatusRepositorio statusRepositorio;

    @PostPersist
    public void afterSave(Usuario usuario) {
        Status status = new Status();

        status.setUsuario(usuario);
        status.setDataregistro("-");
        status.setDatavisto("-");
        status.setStatus("INATIVO");
        status.setCodigounico("");

        usuario.setStatus(status);
        statusRepositorio.save(status);
    }
    */
}
