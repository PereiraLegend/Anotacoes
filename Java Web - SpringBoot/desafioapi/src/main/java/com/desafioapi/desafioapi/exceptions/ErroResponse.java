/*
package com.desafioapi.desafioapi.exceptions;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class ErroResponse {
    private final int status;
    private final String message;
    private final String stackTrace;
    private List<ErroValidacao> errors;

    @Data
    private static class ErroValidacao{
        private final String field;
        private final String message;
    }

    public void addErroValidacao(String field, String message){
        if(Objects.isNull(errors)){
            this.errors = new ArrayList<>();
        }
    }

    public String toJson() {
        return "{\"status\": " + getStatus() + ", " + "\"message\": \"" + getMessage() + "\" }";
    }

}
*/