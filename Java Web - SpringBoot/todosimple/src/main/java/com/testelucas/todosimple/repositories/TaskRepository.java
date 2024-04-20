package com.testelucas.todosimple.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;

import com.testelucas.todosimple.models.Task;
import java.util.List;


public interface TaskRepository extends JpaRepository<Task, Long>{
    // Caso eu queira fazer de uma forma mais avançada através de uma busca do sql, sem utilizar o "JpaRepositorys"
    // Aqui eu quero buscar uma lista de tasks do usuário:
    List<Task> findByUser_Id(Long id); // aqui no no "findByUser_Id" eu coloco o "_" para dizer que eu estou pesquisando pelo "user" e dentro dele o "id"

    // Posso fazer de outra forma, utilizando um conceito do Spring, o "jpql", que é uma forma de misturar o java com slq:
    // @Query(value = "SELECT t FROM Task t WHERE t.user.id = :id")
    // List<Task> findByUser_Id(@Param("id") Long id); //Dessa forma posso nomear o "findByUser_Id" de qualquer forma, como por exemplo "xyz"

    // Agora se eu quiser usar uma query pura:
    // @Query(value = "SELECT * FROM task t WHERE t.user_id = :ido",nativeQuery = true) // Aqui eu uso o nome da tabela
    // List<Task> findByUser_Id(@Param("id") long id);

    // Obs.: a mais recomendada de utilizar é a do começo, onde existe toda uma estrutura já montada, tratamento de erros, e funções já definidas
}
