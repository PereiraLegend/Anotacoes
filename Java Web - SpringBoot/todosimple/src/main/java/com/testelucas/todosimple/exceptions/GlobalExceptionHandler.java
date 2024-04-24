package com.testelucas.todosimple.exceptions;

//import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.ConstraintViolationException;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.AccessDeniedException;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.testelucas.todosimple.services.exceptions.DataBindingViolationException;
import com.testelucas.todosimple.services.exceptions.ObjectNotFoundException;

//import com.lucasangelo.todosimple.services.exceptions.AuthorizationException;
//import com.lucasangelo.todosimple.services.exceptions.DataBindingViolationException;
//import com.lucasangelo.todosimple.services.exceptions.ObjectNotFoundException;

import lombok.extern.slf4j.Slf4j;

//Nessa classe abaixo eu capturo globalmente os erros e faço as devidas atribuições do mesmo
@RestControllerAdvice
@Slf4j(topic = "GLOBAL_EXEPTION_HANDLER") //Aqui é um logger, ele sempre vai mostrar no console as anotações da classe
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
    @Value("${server.error.include-exception}")
    private boolean printStackTrace; // Não é certo mostrar o trace, que no caso é todo o relatório de erro que o javascript mostra no console caso haja uma exception, mas aqui estou fazendo ao contrario, estou criando o boolean para verificar se estou em "produção" ou não, no caso se retorno isso ou não
    
    // Basicamente copie e cole isso caso de criar uma nova api, ,mas esse método vai capturar qualquer tipo de exceção do sistema  que for um argumento inválido

    // Para erros que não podem ser processados
    @Override 
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException methodArgumentNotValidException,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request) {
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.UNPROCESSABLE_ENTITY.value(), // Isso aqui processa erros que não puderam ser processados
                "Validation error. Check 'errors' field for details.");
        for (FieldError fieldError : methodArgumentNotValidException.getBindingResult().getFieldErrors()) {
            errorResponse.addValidationError(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return ResponseEntity.unprocessableEntity().body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> handleAllUncaughtException(Exception exception, WebRequest request){
        final String errorMessage = "Unknow error occurred";
        log.error(errorMessage, exception);
        return buildErrorResponse(exception, errorMessage, HttpStatus.INTERNAL_SERVER_ERROR, request);
    }
    
    //Erro de integridade // Caso eu crie um usuário com o mesmo nome de outro usuário já existente
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<Object> handleDataIntegrityViolationException( DataIntegrityViolationException dataIntegrityViolationException, WebRequest request){
        String errorMessage = dataIntegrityViolationException.getMostSpecificCause().getMessage();
        log.error("Falied to save entity wity integrity problems: "+ errorMessage, dataIntegrityViolationException);
        return buildErrorResponse(dataIntegrityViolationException, errorMessage, HttpStatus.CONFLICT, request);
    }

    // Caso eu envie uma senha no fomato errado ao criar um novo usuário
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ResponseEntity<Object> handleConstraintyViolationException( ConstraintViolationException constraintViolationException, WebRequest request){
        log.error("Falied to validate element", constraintViolationException);
        return buildErrorResponse(constraintViolationException, HttpStatus.UNPROCESSABLE_ENTITY, request);
    }

    //Para erros de exceção customizados, por exemplo se eu pesquisar um usuário que não existe e o exceptions de erro que está dentro da pasta service não puder dar conta de dar um tratamento adequado ao mesmo eu usa a função
    @ExceptionHandler(ObjectNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleObjectNotFoundException( ObjectNotFoundException ObjectNotFoundException, WebRequest request) {
        log.error("Falied to find the request element", ObjectNotFoundException);
        return buildErrorResponse(ObjectNotFoundException, HttpStatus.NOT_FOUND, request);
    }
    
    // Para erros de exceção customizados // Neste abaixo aponta a um erro dentro dos exceptios da pasta service, aonde eu não posso deletar um usuário que tenha tasks 
    @ExceptionHandler(DataBindingViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT) // Aqui eu dou conflito, pois não posso deletar uma entidade que tenha uma associação
    public ResponseEntity<Object> handleDataBindingViolationException( DataBindingViolationException DataBindingViolationException, WebRequest request) {
        log.error("Falied to find the request element", DataBindingViolationException);
        return buildErrorResponse(DataBindingViolationException, HttpStatus.NOT_FOUND, request);
    }

    // Construtores

    private ResponseEntity<Object> buildErrorResponse(Exception exception, HttpStatus httpStatus, WebRequest request){
        return buildErrorResponse(exception, exception.getMessage(), httpStatus, request);
    }

    private ResponseEntity<Object> buildErrorResponse(Exception exception, String message, HttpStatus httpStatus, WebRequest request) {
        ErrorResponse errorResponse = new ErrorResponse(httpStatus.value(), message);
        if (this.printStackTrace) {
            errorResponse.setStackTrace(ExceptionUtils.getStackTrace(exception));
        }
        return ResponseEntity.status(httpStatus).body(errorResponse);
    }
}
