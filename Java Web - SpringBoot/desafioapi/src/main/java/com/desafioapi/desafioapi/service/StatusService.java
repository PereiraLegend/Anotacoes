package com.desafioapi.desafioapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafioapi.desafioapi.models.Status;
import com.desafioapi.desafioapi.repositories.StatusRepositorio;

@Service
public class StatusService {
    @Autowired
    private StatusRepositorio statusRepositorio;

    public Status save(Status obj){
        return statusRepositorio.save(obj);
    }
}
