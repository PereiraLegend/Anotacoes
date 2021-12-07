package DTO;

/**
 *
 * @author Lucas Pereira Dos Santos(202002552051) & Alexandre Lucas Carvalho Souza(202002120991) & João Lucas de Sousa Santos (201802367462)
 */
public class FuncionarioLoginDTO {
    private int Id;
    private String nome, senha;
    public int getId() {
        return Id;
    }
    public void setId(int Id) {
        this.Id = Id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
}
