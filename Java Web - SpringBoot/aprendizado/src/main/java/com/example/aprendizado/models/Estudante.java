package com.example.aprendizado.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = Estudante.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Estudante {

    public static final String TABLE_NAME = "Estudantes";

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column( name = "name", length = 100, nullable = false)
    @NotBlank(message = "O novo deve ser informado")
    @Size(min = 2, message = "O nome deve possuir mais caracteres")
    private String name;

    @Column( name = "idade", length = 20)
    @NotNull
    @NotEmpty
    @Min( value = 18, message = "O aluno deve ter no minimo 18 anos")
    private int idade;
}
