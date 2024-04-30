package com.testelucas.todosimple.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.testelucas.todosimple.models.User;
import com.testelucas.todosimple.models.dto.UserCreateDTO;
import com.testelucas.todosimple.models.dto.UserUpdateDTO;
//import com.testelucas.todosimple.models.User.CreateUser;
//import com.testelucas.todosimple.models.User.UpadateUser;
import com.testelucas.todosimple.services.UserService;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




// Aqui é onde eu me comunico com o frontend, o usuário
// Por ser padrão mvc eu preciso adicionar os métodos abaixo
@RestController
@RequestMapping("/user") // Essa vai ser a rota base
@Validated
public class UserController {

    @Autowired
    private UserService userService; // Aqui eu chamo o service do User

    //"localhos:8080/user/1"
    @GetMapping("/{id}") // Aqui eu preciso passar dentro de chaves para informar que isso é uma variável que eu vou receber na api que vai cair no controller
    public ResponseEntity<User> findById(@PathVariable Long id){ // Aqui eu passo "ResponseEntity" pois é uma entidade de reposta, similar ao res e req do Javascript, serve peara evitar erros no recebimento dos dados em um formato especifico // o "PathVariable" é uma variável no meio do caminho
        User obj = this.userService.findById(id);
        return ResponseEntity.ok().body(obj);// O ok vai retornar um status 200 de que está tudo "ok" // body é o corpo da resposta
    }

    @PostMapping
    //@Validated(CreateUser.class) // Aqui eu não passo uma classe, mas sim uma interface // Observação, como na ultima etapa de desenvolvimento eu retirei a validação por interface eu comentei os @Validated
    public ResponseEntity<Void> create(@Valid @RequestBody UserCreateDTO obj){ // Observação sempre passa o dado do create e do update apenas no body, e get e delete não se passa dado no body // o invés de criar o usuário de 'User' depois da refatoração eu crio o usuário através de UserCreateDTO
        User user = this.userService.fromDTO(obj);
        User newUser = this.userService.create(user);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newUser.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    //@Validated(UpadateUser.class)
    public ResponseEntity<Void> update(@Valid @RequestBody UserUpdateDTO obj, @PathVariable Long id){
        obj.setId(id);
        User user = this.userService.fromDTO(obj);
        this.userService.update(user);
        return ResponseEntity.noContent().build(); // "noContent()" vai retornar um status 200
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
        this.userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
