package DTO;

/**
 *
 * @author Lucas Pereira Dos Santos(202002552051) & Alexandre Lucas Carvalho Souza(202002120991) & João Lucas de Sousa Santos (201802367462) 
 */
public class LivroDTO {
    private String Titulo,Autor,Editora,Ano, Situacao, DataDevolucao, CodigoLeitorEmprestado;
    private int Id;
    
    public String getTitulo() {
        return Titulo;
    }
    public void setTitulo(String Titulo) {
        this.Titulo = Titulo;
    }
    public String getAutor() {
        return Autor;
    }
    public void setAutor(String Autor) {
        this.Autor = Autor;
    }
    public String getEditora() {
        return Editora;
    }
    public void setEditora(String Editora) {
        this.Editora = Editora;
    }
    public int getId() {
        return Id;
    }
    public void setId(int Id) {
        this.Id = Id;
    }
    public String getAno() {
        return Ano;
    }
    public void setAno(String Ano) {
        this.Ano = Ano;
    }
    public String getSituacao() {
        return Situacao;
    }
    public void setSituacao(String Situacao) {
        this.Situacao = Situacao;
    }
    public String getDataDevolucao() {
        return DataDevolucao;
    }
    public void setDataDevolucao(String DataDevolucao) {
        this.DataDevolucao = DataDevolucao;
    }
    public String getCodigoLeitorEmprestado() {
        return CodigoLeitorEmprestado;
    }
    public void setCodigoLeitorEmprestado(String CodigoLeitorEmprestado) {
        this.CodigoLeitorEmprestado = CodigoLeitorEmprestado;
    }
    
}
