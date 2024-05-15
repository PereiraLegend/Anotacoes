package com.example.aprendizado.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.aprendizado.models.Estudante;
import com.example.aprendizado.services.EstudanteService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/estudante")
@Validated
public class EstudanteController {
    
    @Autowired
    private EstudanteService estudanteService;

    // Aqui embaixo eu quero listar todos os estudantes, no caso se fosse para eu retornar todos eles e depois utilizando uma tecnologia como o javascript eu poderia fazer do jeito padrão:
    
    @GetMapping("/teste")
    public List<Estudante> getAllEstudantes(Model model){
        return estudanteService.getAllEstudantes();
    }    
    
    // Contudo eu quero utilizar puramente o java para retornar o backend do frontend, então eu crio dessa forma
    @GetMapping("/all")
    public String listarEstudantes(Model model) {
        //Ao invés de declarar a lista no public eu declaro dentro da função apenas para extrair o seu objeto
        List<Estudante> estudantes = estudanteService.getAllEstudantes();
        System.out.println(estudantes);
        model.addAttribute("listaEstudantes", estudantes); // Aqui eu crio um apelido que faz a referência ao objeto criado acima para que essa referência seja colocada no frontend java
        System.out.println(model.addAttribute("listaEstudantes", estudantes));
        return "lista-estudantes"; // Aqui eu retorno a página html que será dado
    }
    
}
