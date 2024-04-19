package com.testelucas.todosimple.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity //Obrigatoriamente eu crio uma entidade
@Table(name = User.TABLE_NAME) //Aqui eu estarei criando as tabelas do banco de dados
public class User {
    //Criando uma interface
    public interface CreateUser {} // Eu criei interfaces vazias sem nenhum método e nem nada para garantir que na hora da criação eu possa verificar se é "@NotNull", se não é @NotEmpty e o @Size
    public interface UpadateUser {}

    //Criação de Tabela
    public static final String TABLE_NAME = "user";
    //Criação de atributos:

    //Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Aqui é como se fosse o auto increment do sql, mas dito em python, e eu posso definir uma estratégia para ele, como por exemplo: uma classe, uma tabela, uma sequência, uma identidade ou automático, ma so mais recomendado é o identity pois é como se fosse o padrão
    @Column(name="id", unique = true) // aqui eu digo as informações da coluna, como o nome dela e o tipo, é recomandavél colocar "unique" pois se houver algum problema com backups os valores vão estar integros em relação a comunicação Sql - Java
    private Long id; // Ao invés de usar um tipo primitivo como int ou integer, é recomendável utilizar Long, pois ids crescem bastante com o tempo

    //Nome
    @Column(name = "username", length = 100, nullable = false, unique = true)// mais informações para a coluna // Anotações como essa são enviadas ao banco de dados, e se der erro vai ser erro de banco de dados // Obs.: Sempre observar se para o projeto em questão é necessário mudar o identificador ou outros atributos como nome ou email, já que dependendo disso posso disso eu posso bloquear ou não a mudança desses parâmetros para o usuário
    @NotNull(groups = CreateUser.class) //Aqui eu digo que não pode ser nulo // Aqui eu chamo a interface criada acima "CreateUser" para validar se não é nulo
    @NotEmpty(groups = CreateUser.class) //Aqui eu digo que não pode ser colocado uma string vazia // Aqui eu chamo a interface criada acima "CreateUser" para validar se não é vazio
    @Size(groups = CreateUser.class, min=2,max=100) //Aqui eu digo a regra de caracteres aceitaveis, como máximo 100 e minimo 2 // Aqui eu chamo a interface criada acima "CreateUser" para validar se está no tamanho correto
    private String username;

    //Senha
    @JsonProperty(access = Access.WRITE_ONLY) // Para a senha isso garante que ela seja apenas de escrita
    @Column(name = "password", length = 60, nullable = false)// Obs.: Não faz sentido colocar "unique = true" em uma senha
    @NotNull(groups = {CreateUser.class, UpadateUser.class}) // Assim  como eu chamo a interface "CreateUser" para validar as regras, eu chamo a "UpdateUser" para dizer que a senha pode ser alterada, ou seja eu tenho que verificar quando vai ser atualizado um usuário para ver se a senha também não está nula
    @NotEmpty(groups = {CreateUser.class, UpadateUser.class})
    @Size(groups = {CreateUser.class, UpadateUser.class}, min = 8, max = 60)
    private String password;

    // Relacionado as Tasks aos usuários
    @OneToMany(mappedBy = "user") // "Um para todos" // Aqui eu mapeio user para tasks
    private List<Task> tasks = new ArrayList<Task>();

    // Criando os métodos (tudo pode ser gerado automáticamente):
    
    
	// Como o Springboot usa construtores vazios, toda classe criada tem que ter construtores vazios
    public User() { //Construtor vazio
    }
    
    // Também é necessário gerar o construtor com todos os campos
    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public User(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    // Gerando os Getters e Setters

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Gerando os validadores:
    @Override
    // A classe comentada é o padrão e o logo abaixo dela é o criado manualmente
    /*
        public boolean equals(Object o) {
        if(o == this)
            return true;
        if(!(o instanceof User)){
            return false;
        }
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }
     */

    public boolean equals(Object obj) {
        if(obj == this)
            return true;
        if(obj == null){
            return false;
        }
        if(!(obj instanceof User)){
            return false;
        }
        User other = (User) obj;
        if (this.id == null)
            if (other.id != null)
                return false;
            else if (!this.id.equals(other.id))
                return false;
        return Objects.equals(this.id, other.id) && Objects.equals(this.username, other.username) && Objects.equals(this.password, other.password);
    }

    @Override
    public int hashCode(){
        //return Objects.hash(id, username, password);//Este é o padrão
        // criando um manual logo abaixo, para caso dê algum tipo de problema de memória, o que é muito raro de acontecer
        final int prime = 31;
        int result = 1;
        result = prime * result + ((this.id == null) ? 0 : this.id.hashCode());
        return result;
    }
    
}
