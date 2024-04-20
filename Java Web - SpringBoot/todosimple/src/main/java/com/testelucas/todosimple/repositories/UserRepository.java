package com.testelucas.todosimple.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.testelucas.todosimple.models.User;


//Aqui eu chamo as funções para criar as services no bd
@Repository
public interface UserRepository extends JpaRepository<User, Long> { // Para criar um repositoryeu crio uma interface, extendo de "JpaRepository" e chamo o model de quem eu quero que seja esse repository, ou seja o user que eu criei em models // Apenas por fazer esse extends eu chamo todos os métodos do "JpaRepository"
    //Enquanto no models eu me concentro em criar o banco de dados e as tabelas necessárias, aqui eu me concentro em criar as funcionalidades, por exemplo, pesquisa por usuário
    // Ex.: User findByUsername(String username);
}
