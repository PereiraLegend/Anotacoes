package com.testelucas.todosimple.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Objects;

@Entity
@Table(name = Task.TABLE_NAME)
public class Task {
    public static final String TABLE_NAME = "task";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @ManyToOne // Aqui eu vou na idéia de que muitas tarefas podem estar relacionadas a apenas um usuário, ou seja não dá para criar uma tarefa sem um usuário e várias tarefas podem ter apenas um usuário
    @JoinColumn(name = "user_id", nullable = false, updatable = false) // Aqui eu digo que quero que isso faça um join na coluna que eu definir // Ou seja isso vai fazer referência a chave primária do user, ou seja uma chave estrangeira // ao adicionar "nullable" e "updable" false, é para seguir a lógica de que eu não posso deixar no meu sistema uma tarefa atualizar um usuário para outro usuário, ou seja não faz sentido uma tarefa passar de uma pessoa para outra pessoa, o banco de dados já faz isso automáticamene, isso é apenas para garantir
    private User user;

    @Column(name = "description", length = 255, nullable = false)
    @NotNull
    @NotEmpty
    @Size(min=1, max=255) // Obs.: Sempre tratar o tamanho para caso haja algum erro ele ser tratado diretamente aqui sem dar complicações para o banco de dados
    private String description;

    // Gerando tudo
    public Task() {
    }

    public Task(Long id, User user, String description) {
        this.id = id;
        this.user = user;
        this.description = description;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Task id(Long id) {
        setId(id);
        return this;
    }

    public Task user(User user) {
        setUser(user);
        return this;
    }

    public Task description(String description) {
        setDescription(description);
        return this;
    }

    //Validadores padrão
    /*
    @Override
    public boolean equals(Object o) {
      return EqualsBuilder.reflectionEquals(this, o);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, description);
    }
    */
    public boolean equals (Object obj) {
        if (obj == this)
            return true;
        if (obj == null)
            return false;
        if(!(obj instanceof Task))
            return false;
        Task other = (Task) obj;
        if (this.id == null)
            if (other.id == null)
                return false;
            else if (!this.id.equals(other.id))
                return false;
        return Objects.equals(this.id, other.id) && Objects.equals(this.user, other.user) && Objects.equals(this.description, other.description);

    }
    /* // Por enquanto isso abaixo não é necessário
    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", user='" + getUser() + "'" +
            ", description='" + getDescription() + "'" +
            "}";
    }
    */
    
}
