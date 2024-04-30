package com.testelucas.todosimple.models.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserUpdateDTO { // Aqi eu deixo claro que apenas devo atualizar a senha
    private Long id;

    @NotBlank
    @Size(min=8,max=60)
    private String password;
}
