package DAO;

import DTO.LeitorDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.mycompany.av2Viewn.CadastroLeitor;
import com.mycompany.av2Viewn.Emprestimodelivro;
import java.util.ArrayList;
import javax.swing.JOptionPane;

/**
 *
 * @author Lucas Pereira Dos Santos(202002552051) & Alexandre Lucas Carvalho Souza(202002120991) & João Lucas de Sousa Santos (201802367462) 
 */
public class LeitorDAO {
    Connection con;
    PreparedStatement pstm;
    ResultSet sr;
    ArrayList<LeitorDTO> Lista = new ArrayList<>();
    public void cadastroLeitor(LeitorDTO objLeitordto){
        String sql = "insert into cadastroleitor (Nome, Cpf, Email, Telefone, Situacao) VALUES (?,?,?,?,?)";
        con = new ConexaoDAO().conactaBD();
        try {
            pstm = con.prepareStatement(sql);
            pstm.setString(1, objLeitordto.getNome());
            pstm.setInt(2, objLeitordto.getCpf());
            pstm.setString(3, objLeitordto.getEmail());
            pstm.setInt(4, objLeitordto.getTelefone());
            pstm.setString(5, objLeitordto.getSituacao());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            //JOptionPane.showMessageDialog(null, "LeitorDAO Cadastro"+erro);
            JOptionPane.showMessageDialog(null, "Insirar a Situação Atual do Leitor");
        }
    }
    public ArrayList<LeitorDTO> PesquisaLeitor(){
        String sql = "select * from cadastroleitor";
        con = new ConexaoDAO().conactaBD();
        try {
            pstm = con.prepareStatement(sql);
            sr = pstm.executeQuery();
            while(sr.next()){
                LeitorDTO objLeitordto = new LeitorDTO();
                objLeitordto.setId(sr.getInt("Id"));
                objLeitordto.setNome(sr.getString("Nome"));
                objLeitordto.setCpf(sr.getInt("Cpf"));
                objLeitordto.setEmail(sr.getString("Email"));
                objLeitordto.setTelefone(sr.getInt("Telefone"));
                objLeitordto.setSituacao(sr.getString("Situacao"));
                Lista.add(objLeitordto);
            }
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "LeitorDAO Pesquisa"+erro);
        }
        return Lista;
    }
    public void AlterarLeitor(LeitorDTO objleitordto){
        String sql = "update cadastroleitor set Nome = ?, Cpf = ?, Email = ?, Telefone = ?, Situacao = ? where Id = ?";
        con = new ConexaoDAO().conactaBD();
        try {
            pstm = con.prepareStatement(sql);
            pstm.setString(1, objleitordto.getNome());
            pstm.setInt(2, objleitordto.getCpf());
            pstm.setString(3, objleitordto.getEmail());
            pstm.setInt(4, objleitordto.getTelefone());
            pstm.setString(5, objleitordto.getSituacao());
            pstm.setInt(6, objleitordto.getId());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            //JOptionPane.showMessageDialog(null, "LeitorDAO Alterar"+erro);
            JOptionPane.showMessageDialog(null, "Insirar a Situação Atual do Leitor");
        }
    }
    public void ExcluirLeitor(LeitorDTO objleitordto){
        String sql = "delete from cadastroleitor where Id = ?";
        con = new ConexaoDAO().conactaBD();
        try {
            pstm = con.prepareStatement(sql);
            pstm.setInt(1, objleitordto.getId());
            pstm.execute();
            pstm.close();
        } catch (Exception erro){
            JOptionPane.showMessageDialog(null, "LeitorDAO Excluir"+erro);
        }
    }
    public LeitorDTO getPesquisaLeitorID(int id){
        String sql = "select * from cadastroleitor where id=?";
        con = new ConexaoDAO().conactaBD();
        try {
            PreparedStatement pstm = this.con.prepareStatement(sql);
            pstm.setInt(1, id);
            ResultSet sr = pstm.executeQuery();
            LeitorDTO objleitordto = new LeitorDTO();
            sr.first();
            objleitordto.setNome(sr.getString("Nome"));
            objleitordto.setCpf(sr.getInt("Cpf"));
            objleitordto.setSituacao(sr.getString("Situacao"));
            return objleitordto;
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "LeitorDAO PesquisaID ou Id inválido Inserido "+erro);
        }
        return null;
    }
}
