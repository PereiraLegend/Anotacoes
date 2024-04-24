package com.testelucas.todosimple.services.exceptions;

import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Para erros de pesquisa para usuários
@ResponseStatus(value = HttpStatus.NOT_FOUND) // Aqui eu customizo o erro para o globalextensions criado para os services
public class ObjectNotFoundException extends EntityNotFoundException  {
    
    public ObjectNotFoundException(String message){ // Nesse construtor eu pego a menssagem de erro aonde eu passar essa função e mostro ao usuário
        super(message);
    }
}
