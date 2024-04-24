package com.testelucas.todosimple.services.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//Para erros de não conseguir deletar usuáiros, pois até agora o sistema não permite que usuários sejam deletados sem que as suas tasks sejam deletadas em conjunto
//Ou seja isso acusa um problema de associação
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DataBindingViolationException extends DataIntegrityViolationException {
    public DataBindingViolationException(String message){
        super(message);
    }
}
