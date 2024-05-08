package com.desafioapi.desafioapi.service;

import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.desafioapi.desafioapi.models.Status;
import com.desafioapi.desafioapi.repositories.StatusRepositorio;

@Service
public class StatusService {
    @Autowired
    private StatusRepositorio statusRepositorio;

    public Status findById(Long id){
        Optional<Status> status = this.statusRepositorio.findById(id);
        return status.orElseThrow(() -> new RuntimeException("Usuário não encontrado! Id: " + id ));

    }

    @Transactional
    public Status create(Status obj){
        obj.setId(null);
        obj = this.statusRepositorio.save(obj);
        return obj;
    }

    @Transactional
    public Status update(Status obj) {
        Status existingStatus = findById(obj.getId());
        if ("ATIVO".equals(obj.getStatus())) {
            String novoCodigoUnico;
            do {
                novoCodigoUnico = gerarCodigoUnico();
            } while (codigoUnicoExiste(novoCodigoUnico));
            obj.setCodigounico(novoCodigoUnico);
        } else {
            obj.setCodigounico("");
        }
        return statusRepositorio.save(obj);
    }

    //Verificador de Exitência do código unico
    private boolean codigoUnicoExiste(String codigo) {
        return statusRepositorio.existsByCodigounico(codigo);
    }

    private String gerarCodigoUnico() {
        Random aleatorio = new Random();
        StringBuilder codigo = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            codigo.append(aleatorio.nextInt(10));
        }
        codigo.append("PI");
        return codigo.toString();
    }
}
