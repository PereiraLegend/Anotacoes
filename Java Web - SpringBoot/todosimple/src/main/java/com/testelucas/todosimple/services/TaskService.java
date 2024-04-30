package com.testelucas.todosimple.services;

import java.util.List;
import java.util.Objects;
//import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testelucas.todosimple.models.Task;
import com.testelucas.todosimple.models.User;
import com.testelucas.todosimple.models.enums.ProfileEnum;
import com.testelucas.todosimple.repositories.TaskRepository;
import com.testelucas.todosimple.security.UserSpringSecurity;
import com.testelucas.todosimple.services.exceptions.AuthorizationException;
import com.testelucas.todosimple.services.exceptions.DataBindingViolationException;
import com.testelucas.todosimple.services.exceptions.ObjectNotFoundException;

// Aqui crio as funções de comunicação e inserção com o bd
@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserService userService;

    public Task findById(Long id){
        Task task = this.taskRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException(
            "Tarefa não encontrada!" + id + ", Tipo" + Task.class.getName()
        ));

        UserSpringSecurity userSpringSecurity = UserService.authenticaded();
        if (Objects.isNull(userSpringSecurity) || !userSpringSecurity.hasRole(ProfileEnum.ADMIN) && !userHasTask(userSpringSecurity, task)) // Aqui eu faço a verificação que se o usuário não estiver logado e se ele não for um administrador e nem for o dono da task
            throw new AuthorizationException("Acesso negado!");

        return task;
    }

    // Pesquisar todas as tasks de um usuário:
    public List<Task> findAllByUser(){
        UserSpringSecurity userSpringSecurity = UserService.authenticaded(); // Verificando se o usuário está logado para colocar as tasks no id
        if(Objects.isNull(userSpringSecurity))
            throw new AuthorizationException("Acesso Negado!");
        List<Task> tasks = this.taskRepository.findByUser_Id(userSpringSecurity.getId());
        return tasks;
    }

    @Transactional
    public Task create(Task obj){ // Aqui eu tenho que usar a lógica de que uma task só pode ser criada por um usuário, levando em conta a chave estrangeira
        UserSpringSecurity userSpringSecurity = UserService.authenticaded(); // Verificando se o usuário está logado para colocar as tasks no id
        if(Objects.isNull(userSpringSecurity))
            throw new AuthorizationException("Acesso Negado!");

        User user = this.userService.findById(userSpringSecurity.getId());
        obj.setId(null);
        obj.setUser(user);
        obj = this.taskRepository.save(obj);
        return obj;
    }

    @Transactional
    public Task update(Task obj){
        Task newObj = findById(obj.getId());
        newObj. setDescription(obj.getDescription());
        return this.taskRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id){
        try {
            this.taskRepository.deleteById(id);
        } catch (Exception e) {
            // Caso não use o tratamento de erro eu suboistituo o "DataBindingViolationException" por "RuntimeException"
            throw new DataBindingViolationException("Não é possivel excluir pois há entidades relacionadas");
        }
    }

    public boolean userHasTask(UserSpringSecurity userSpringSecurity, Task task) { // Aqui eu uso uma booelam para retornar se ele tem permissão ou não
        return task.getUser().getId().equals(userSpringSecurity.getId()); // Aqui eu verifico se o usuário é igual ao usuário que está logado
    }
}
