package com.desafioapi.desafioapi.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotEmpty;
//import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = Funcionario.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Funcionario {
    
    public static final String TABLE_NAME = "Funcionario";

    @Id
    @Column(name="id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", length = 100, nullable = false)
    @NotBlank
    @Size(min=2,max=100)
    private String username;
    
    @JsonProperty(access = Access.WRITE_ONLY)
    @Column(name = "password", length = 100,nullable = false)
    @NotBlank
    @Size(min = 2, max = 100)
    private String password;

}