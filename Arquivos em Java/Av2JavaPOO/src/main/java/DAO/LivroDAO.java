package DAO;

import DTO.LivroDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.mycompany.av2Viewn.CadastroLeitor;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import com.mycompany.av2Viewn.Emprestimodelivro;
import javax.swing.DefaultListModel;
import javax.swing.JList;
/**
 *
 * @author Lucas Pereira Dos Santos(202002552051) & Alexandre Lucas Carvalho Souza(202002120991) & João Lucas de Sousa Santos (201802367462) 
 */
public class LivroDAO {
    Connection noa;
    PreparedStatement pstm;
    ResultSet sr;
    ArrayList<LivroDTO> Lista = new ArrayList<>();
    public void CCadastroLivro(LivroDTO objlivrodto){
        String sql = "insert into cadastrolivro (Titulo, Ano, Autor, Editora, Situacao, DataDevolucao, CodigoLeitorEmprestado) VALUES (?,?,?,?,?,?,?)";
        noa = new ConexaoDAO().conactaBD();
        try {
            pstm = noa.prepareStatement(sql);
            pstm.setString(1, objlivrodto.getTitulo());
            pstm.setString(2, objlivrodto.getAno());
            pstm.setString(3, objlivrodto.getAutor());
            pstm.setString(4, objlivrodto.getEditora());
            pstm.setString(5, objlivrodto.getSituacao());
            pstm.setString(6, objlivrodto.getDataDevolucao());
            pstm.setString(7, objlivrodto.getCodigoLeitorEmprestado());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            //JOptionPane.showMessageDialog(null, "LivroDAO Cadastro"+erro);
            JOptionPane.showMessageDialog(null, "Insira a Situação Atual do Livropp");
        }
    }
    public ArrayList<LivroDTO> PesquisaLivros(){
        String sql = "select * from cadastrolivro";
        noa = new ConexaoDAO().conactaBD();
        try {
            pstm = noa.prepareStatement(sql);
            sr = pstm.executeQuery();
            while(sr.next()){
                LivroDTO objlivrodto = new LivroDTO();
                objlivrodto.setId(sr.getInt("Id"));
                objlivrodto.setTitulo(sr.getString("Titulo"));
                objlivrodto.setAno(sr.getString("Ano"));
                objlivrodto.setAutor(sr.getString("Autor"));
                objlivrodto.setEditora(sr.getString("Editora"));
                objlivrodto.setSituacao(sr.getString("Situacao"));
                objlivrodto.setDataDevolucao(sr.getString("DataDevolucao"));
                objlivrodto.setCodigoLeitorEmprestado(sr.getString("CodigoLeitorEmprestado"));
                Lista.add(objlivrodto);
            }
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "LivroDAO Pesquisa"+erro);
        }
        return Lista;
    }
    public void AlterarLivro(LivroDTO objlivrodto){
        String sql = "update cadastrolivro set Titulo = ?, Ano = ?, Autor = ?, Editora = ?, Situacao = ? where Id = ?";
        noa = new ConexaoDAO().conactaBD();
        try {
            pstm = noa.prepareStatement(sql);
            pstm.setString(1, objlivrodto.getTitulo());
            pstm.setString(2, objlivrodto.getAno());
            pstm.setString(3, objlivrodto.getAutor());
            pstm.setString(4, objlivrodto.getEditora());
            pstm.setString(5, objlivrodto.getSituacao());
            pstm.setInt(6, objlivrodto.getId());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "LivroDAO Alterar"+erro);
            //JOptionPane.showMessageDialog(null, "Insira a Situação Atual do Livro");
        }
    }
    public void AlterarLivroEmprestimo(LivroDTO objlivrodto){
        String sql = "update cadastrolivro set Situacao = ?, DataDevolucao = ?, CodigoLeitorEmprestado = ? where Id = ?";
        noa = new ConexaoDAO().conactaBD();
        try {
            pstm = noa.prepareStatement(sql);
            pstm.setString(1, objlivrodto.getSituacao());
            pstm.setString(2, objlivrodto.getDataDevolucao());
            pstm.setString(3, objlivrodto.getCodigoLeitorEmprestado());
            pstm.setInt(4, objlivrodto.getId());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "LivroDAO AlterarEmprestimo"+erro);
            //JOptionPane.showMessageDialog(null, "Insira a Situação Atual do Livro");
        }
    }
    public void ExcluirLivro(LivroDTO objlivrodto){
        String sql = "delete from cadastrolivro where Id = ?";
        noa = new ConexaoDAO().conactaBD();
        try {
            pstm = noa.prepareStatement(sql);
            pstm.setInt(1, objlivrodto.getId());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "LivroDAO Excluir"+erro);
        }
    }
    
}
