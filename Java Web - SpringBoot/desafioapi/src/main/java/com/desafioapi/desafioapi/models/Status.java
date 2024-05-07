package com.desafioapi.desafioapi.models;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

//import com.desafioapi.desafioapi.models.Usuario.TipoCadastro;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Status {

    public enum TipoCadastro {
        VISTO,
        REGISTRO,
        CANCELADO
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "datavisto", length = 20)
    private String datavisto;

    @Column(name = "dataregistro", length = 20)
    private String dataregistro;

    @Column(name = "status", length = 20)
    private String status;

    @Column(name = "codigounico", length = 12) // unique = true depois do desenvolvimento
    private String codigounico;

    @Column(name = "tipocadastro", length = 100, nullable = false)
    @Enumerated(EnumType.STRING)
    private TipoCadastro tipocadastro;

    // @OneToOne(mappedBy = "status", cascade = CascadeType.ALL)
    // @JoinColumn(name = "status_id", nullable = false, updatable = false)
    // private Usuario usuario;
    // @JsonIgnore
    @JsonBackReference
    @OneToOne
    private Usuario usuario;
}
