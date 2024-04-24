package com.testelucas.todosimple.exceptions;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data // O data tira a necessidade dos getters e seters, bem como os construtores, basicamente tudo aquilo que pode ser gerado automáticamente, isso é feito no intuito de diminuir o código
@JsonInclude(JsonInclude.Include.NON_NULL)// Aqui eu incluo apenas o qunão for nulo // Assim quando eu mudar em "applications.properties" o "server.error.include-exception" para "false" o escopo de erro do json não vai aparecer , oq eu aumenta a egurança da aplicação
public class ErrorResponse { // Aqui eu faço a configuração do tratamento de erros
    private final int status;
    private final String message;
    private String stackTrace;
    private List<ValidationError> errors;

    @Data
    private static class ValidationError {
        private final String field;
        private final String message;
    }
    // Para adicionar os dados dos erros é necessário uma pequena validação
    public void addValidationError(String field, String message){
        if(Objects.isNull(errors)){
            this.errors = new ArrayList<>();
        }
        this.errors.add(new ValidationError(field, message));
    }

    // Gerando Getters e Seters, Obs.: Eles foram gerados com o lombok com a tag @Data
}
