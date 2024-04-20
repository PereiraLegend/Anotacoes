package com.testelucas.todosimple.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testelucas.todosimple.models.Task;
import com.testelucas.todosimple.models.User;
import com.testelucas.todosimple.repositories.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserService userService;

    public Task findById(Long id){
        Optional<Task> task = this.taskRepository.findById(id);
        return task.orElseThrow(() -> new RuntimeException(
            "Tarefa não encontrada!" + id + ", Tipo" + Task.class.getName()
        ));
    }

    @Transactional
    public Task create(Task obj){ // Aqui eu tenho que usar a lógica de que uma task só pode ser criada por um usuário, levando em conta a chave estrangeira
        User user = this.userService.findById(obj.getUser().getId());
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
            // TODO: handle exception
            throw new RuntimeException("Não é possivel excluir pois há entidades relacionadas");
        }
    }
}
