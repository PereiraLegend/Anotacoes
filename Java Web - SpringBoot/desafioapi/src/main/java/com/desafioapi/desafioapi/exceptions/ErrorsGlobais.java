/*
package com.desafioapi.desafioapi.exceptions;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j(topic = "ERRORS_GLOBAIS")
public class ErrorsGlobais extends ResponseEntityExceptionHandler{ //

    @Value("${server.error.include-exception}")
    private boolean mostrarTrace;

    @Override
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    protected ResponseEntity<Object> metodoArgumentoNaoValido( MethodArgumentNotValidException methodArgumentNotValidException, HttpHeaders headers, HttpStatus status, WebRequest request){
        ErroResponse erroResponse = new ErroResponse(HttpStatus.UNPROCESSABLE_ENTITY.value(), "Erro de validacao");
        for (FieldError)
    }
    
}
*/