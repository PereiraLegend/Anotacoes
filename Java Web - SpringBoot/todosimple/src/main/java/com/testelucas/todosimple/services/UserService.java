package com.testelucas.todosimple.services;

import java.util.Optional;

import javax.management.RuntimeErrorException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testelucas.todosimple.models.User;
// import com.testelucas.todosimple.repositories.TaskRepository;
import com.testelucas.todosimple.repositories.UserRepository;

// Aqui crio as funções de comunicação e inserção com o bd
@Service
public class UserService { // aqui crio a camada de serviço para modularizar meu código em "Services"
    
    @Autowired // Com o autowired eu aviso que é para utilizar as anotações do springboot para instanciar e fazer as anotações necessárias para a classe, ou seja  o "Autowired" é o construtor do service
    private UserRepository userRepository; // Sempre lembrar de deixar privado para ninguém ter acesso a isso // Eu importo os repositories que eu criei


    // Não usamos getters e setters em services, apenas construtores que podem ser gerados:

    // Aqui eu crio as funcionalidades
    public User findById(Long id){ // Para fazer pesquisas pelo id
        // Para evitar erro de null pointer exception eu utilizo:
        Optional<User> user = this.userRepository.findById(id);
        return user.orElseThrow(() -> new RuntimeException( // Utilizando "orelseThrow" eu retorno um usuário se ele estiver preenchido // Se eu fizer um tratamento de erro colocando apenas uma Exception o programa vai parar ou seja, seguindo a lógica, toda vez que alguém procura por um usuário nulo a aplicação pararia, e para evitar isso uso "RuntimeException"
            "Usuário não encontrado! Id" + id + ", Tipo: " + User.class.getName()
        )); 
        
    }

    // Ao invés de busca aqui eu estou tentando criar um usuário:
    @Transactional // Sempre que eu for criar uma service para alterar o banco de dados, nesse caso fazer um CRUD de criar um usuário eu adiciono esse método
    public User create(User obj){ 
        obj.setId(null); // Sempre que for criado um novo usuário é necessário resetar o id para evitar uma falha de segurança de o novo usuário atualizar um já existente pelo método create
        obj = this.userRepository.save(obj); // Aqui eu salvo o novo usuário
        //this.taskRepository.saveAll(obj.getTasks()); // Aqui eu salvo todas as tasks, mesmo que o novo usuário não tenha as tasks
        return obj;
    }

    @Transactional
    public User update(User obj){
        User newObj = findById(obj.getId()); // Aqui eu chamo a função criada nessa página, o "findById" para achar o usuário e alterar o mesmo
        newObj.setPassword(obj.getPassword()); // Aqui ele atualiza apenas a senha que foi dada
        return this.userRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id){
        findById(id);
        try {
            this.userRepository.deleteById(id); // Se o usuário existir no banco ele irá ser deletado
        } catch (Exception e) {
            // TODO: handle exception
            throw new RuntimeErrorException(null, "Não é possivel excluir o usuário, pois há entidades relacionadas ao mesmo");
        }
    }
    
}
