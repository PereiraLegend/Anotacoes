package com.testelucas.todosimple.models;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.testelucas.todosimple.models.enums.ProfileEnum;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
//import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

// aqui eu crio os models, ou seja o banco de dados
@Entity //Obrigatoriamente eu crio uma entidade
@Table(name = User.TABLE_NAME) //Aqui eu estarei criando as tabelas do banco de dados
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    //Criando uma interface (Obs.: Criei inicialmente isso no desenvolvimento, mas como não faço mais validação utilizando interface agr eu posso escolher tirar ou deixar, tirando os validadores é claro)
    // public interface CreateUser {} // Eu criei interfaces vazias sem nenhum método e nem nada para garantir que na hora da criação eu possa verificar se é "@NotNull", se não é @NotEmpty e o @Size
    // public interface UpadateUser {}

    //Criação de Tabela
    public static final String TABLE_NAME = "user";
    //Criação de atributos:

    //Id
    @Id
    @Column(name="id", unique = true) // aqui eu digo as informações da coluna, como o nome dela e o tipo, é recomandavél colocar "unique" pois se houver algum problema com backups os valores vão estar integros em relação a comunicação Sql - Java
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Aqui é como se fosse o auto increment do sql, mas dito em python, e eu posso definir uma estratégia para ele, como por exemplo: uma classe, uma tabela, uma sequência, uma identidade ou automático, ma so mais recomendado é o identity pois é como se fosse o padrão
    private Long id; // Ao invés de usar um tipo primitivo como int ou integer, é recomendável utilizar Long, pois ids crescem bastante com o tempo

    //Nome
    @Column(name = "username", length = 100, nullable = false, unique = true)// mais informações para a coluna // Anotações como essa são enviadas ao banco de dados, e se der erro vai ser erro de banco de dados // Obs.: Sempre observar se para o projeto em questão é necessário mudar o identificador ou outros atributos como nome ou email, já que dependendo disso posso disso eu posso bloquear ou não a mudança desses parâmetros para o usuário
    //@NotNull(groups = CreateUser.class) //Aqui eu digo que não pode ser nulo // Aqui eu chamo a interface criada acima "CreateUser" para validar se não é nulo
    //@NotEmpty(groups = CreateUser.class) //Aqui eu digo que não pode ser colocado uma string vazia // Aqui eu chamo a interface criada acima "CreateUser" para validar se não é vazio
    @NotBlank // Como aqui é uma string eu posso pedir um @NotBlank
    //@Size(groups = CreateUser.class, min=2,max=100) //Aqui eu digo a regra de caracteres aceitaveis, como máximo 100 e minimo 2 // Aqui eu chamo a interface criada acima "CreateUser" para validar se está no tamanho correto // Aqui eu tirei a regra que pedia validação porinterface e coloquei o sem interface abaixo
    @Size(min=2,max=100)
    private String username;

    //Senha
    @JsonProperty(access = Access.WRITE_ONLY) // Para a senha isso garante que ela seja apenas de escrita
    @Column(name = "password", length = 60, nullable = false)// Obs.: Não faz sentido colocar "unique = true" em uma senha
    //@NotNull(groups = {CreateUser.class, UpadateUser.class}) // Assim  como eu chamo a interface "CreateUser" para validar as regras, eu chamo a "UpdateUser" para dizer que a senha pode ser alterada, ou seja eu tenho que verificar quando vai ser atualizado um usuário para ver se a senha também não está nula
    //@NotEmpty(groups = {CreateUser.class, UpadateUser.class})
    @NotBlank
    //@Size(groups = {CreateUser.class, UpadateUser.class}, min = 8, max = 60)
    @Size(min=2,max=100)
    private String password;

    // Relacionado as Tasks aos usuários
    @OneToMany(mappedBy = "user") // "Um para todos" // Aqui eu mapeio user para tasks por uma chave estrangeira
    @JsonProperty(access = Access.WRITE_ONLY)
    private List<Task> tasks = new ArrayList<Task>();

    // // Adicionando tipos de usuários derivados do arquivo "./enums/ProfileEnum.java" utilizando a idéia de autenticação // //
    @ElementCollection(fetch = FetchType.EAGER) // Aqui ele sempre busca os perfis quando for buscar o usuário para que as validações sejam corretas
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // Nisso eu garanto que não retorno para o usuário quais que são os perfis do mesmo
    @CollectionTable(name = "user_profile")
    @Column(name = "profile", nullable = false)
    private Set<Integer> profiles = new HashSet<>(); // O método "Set" e "HashSet" garantem que o valor seja único

    public Set<ProfileEnum> getProfiles () {
        return this.profiles.stream().map(x -> ProfileEnum.toEnum(x)).collect(Collectors.toSet()); // Esse tipo de função é uma função lambda excession, onde ele vai estar pegando os perfis de "profiles" (que é retirado do arquivo enums) transformando em uma stream que podemos percorrer mapeando cada um dos valores, pegando "profileenum" e passando "toEnum", e transformando em um set pelo collect
    }

    public void addProfile(ProfileEnum profileEnum) {
        this.profiles.add(profileEnum.getCode());
    }
     // // // //


    // Criando os métodos (tudo pode ser gerado automáticamente):
    
    /*
	// Como o Springboot usa construtores vazios, toda classe criada tem que ter construtores vazios
    public User() { //Construtor vazio
    }
    
    // Também é necessário gerar o construtor com todos os campos
    @JsonIgnore // Esse método serve para quando eu buscar um usuário e não busqeu todas as tasks do mesmo, no caso na lógica eu quero apenas buscar os dados do usuário e não tudo sobre ele
    public List<Task> getTasks() {
        return this.tasks;
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
    */
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
    /*
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
    */
    
}
