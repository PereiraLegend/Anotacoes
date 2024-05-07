package com.desafioapi.desafioapi.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "datavisto", length = 20)
    private String datavisto;

    @Column(name = "dataregistro", length = 20)
    private String dataregistro;

    @Column(name = "status", length = 20)
    private String status;

    @Column(name = "codigounico", length = 12, unique = true)
    private String codigounico;

    @OneToOne(mappedBy = "status", cascade = CascadeType.ALL)
    private Usuario usuario;
}
