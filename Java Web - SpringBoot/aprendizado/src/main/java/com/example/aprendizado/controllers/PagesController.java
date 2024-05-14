package com.example.aprendizado.controllers;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.aprendizado.models.Estudante;
import com.example.aprendizado.services.EstudanteService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@Controller
public class PagesController { // Aqui crio as rotas da página na aplicação springboot caaso queira lançar uma interface junto com a api na mesma plataforma

    @Autowired
    private EstudanteService estudanteService;
    
    @GetMapping("/")
    public String listarEstudantes() {
        return "/lista-estudantes";
    }

    @GetMapping("/novo") // Aqui é a chamada de um botão para a navegação para a outra página criada
    public String novoEstudante(Model model) { // Criando totalmente a api e os templates através do java, eu não preciso criar um código js para fazer requisições diretas para a api, eu crio dentro do próprio java utilizando métodos, como o código logo abaixo:
        Estudante estudante = new Estudante(); // Aqui eu crio um objeto estudante e logo na linha abaixo dou a ele um apelido 
        model.addAttribute("novoEstudante", estudante); // Aqui nessa linha eu acesso o objeto estudante através do apelido "novoEstudante", que é adicionado no formulário html de requisição, na parte do frontend
        return "/novo-estudante";
    }
    
    @PostMapping("/gravar")
    public String gravarEstudante(@ModelAttribute("novoEstudante") @Valid Estudante estudante, BindingResult erros, RedirectAttributes attributes) { // Como os dados serão passados para estudante eu puxo os dados pelo apelido utilizando uma anotação, o '@ModelAtribute...'// Para colocar uma mensagem para o usuário para informar que o dado foi salvo eu utilizo o método "RedirectAttributes attributes" // Para validar eu adiciono o @Valid e para extrair os erros eu Utilizo o "BindingResult erros"
        //Antes de enviar para o banco de dados eu crio um if para fazer a validação de erros:
        if(erros.hasErrors()){ // Aqui se houver erros eu mando uma mensagem de retorno para o formulário para que o código não quebre ou dê acesso negado
            return "/novo-estudante";
        }
        estudanteService.create(estudante); // com apenas este método ele já pode ser salvo no banco de dados
        // Colocando a mensagem que é enviada ao usuário :
        attributes.addFlashAttribute("mensagem", "Estudante salvo com sucesso!");
        return "redirect:/novo"; //Aqui assim que o processo de cima for condluido eu preciso encaminhar essa rrequisição para algum lugar e para isso utilizo o "redirect:/novo", que vai enviar o usuário para a mesma página do formulário ou para a que o desenvolvedor definir após o formulário ser encaminhado
    }
    
    
}
