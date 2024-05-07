package com.desafioapi.desafioapi.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = Usuario.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Usuario {
    
    public static final String TABLE_NAME = "Usuario";

    public enum TipoCadastro{
        VISTO,
        REGISTRO
    }

    @Id
    @Column(name="id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", length = 100, nullable = false)
    @NotBlank
    @Size(min=2,max=100)
    private String username;

    @Column(name = "tipocadastro", length = 100, nullable = false)
    @Enumerated(EnumType.STRING)
    private TipoCadastro tipocadastro;
    
    @JsonProperty(access = Access.WRITE_ONLY)
    @Column(name = "password", length = 11,nullable = false)
    @NotBlank
    @Size(min = 2, max = 100)
    private String password;

    @Column(name = "cpf", length = 11,nullable = false, unique = true)
    @NotNull
    private Long cpf;

    @Column(name = "email", length = 60,nullable = false, unique = true)
    @NotBlank
    @Size(min=6, max = 60)
    private String email;

    @Column(name = "datanascimento")
    @NotBlank
    @Size(min = 2)
    private String datanascimento;
    
    @Column(name = "telefone")
    @NotBlank
    @Size(min = 2)
    private String telefone;

    @Column(name = "titulo", length = 255, nullable = false)
    @NotBlank
    @Size(min=1, max=255)
    private String titulo;

    @OneToOne
    private Status status;
}