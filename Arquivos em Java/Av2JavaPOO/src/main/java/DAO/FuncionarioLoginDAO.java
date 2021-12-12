package DAO;

import DTO.FuncionarioLoginDTO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.swing.JOptionPane;

/**
 *
 * @author Lucas Pereira
 */
public class FuncionarioLoginDAO {
    Connection aon;
    PreparedStatement pstm;
    ResultSet sr;
    ArrayList<FuncionarioLoginDTO> Lista = new ArrayList<>();
    public ResultSet autenticaFuncionario(FuncionarioLoginDTO objfuncionariodto){
        aon = new ConexaoDAO().conactaBD();
        try{
            String sql = "select * from loginfuncionario where Nome=? and Senha=?";
            PreparedStatement pstm = aon.prepareStatement(sql);
            pstm.setString(1, objfuncionariodto.getNome());
            pstm.setString(2, objfuncionariodto.getSenha());
            ResultSet sr = pstm.executeQuery();
            return sr;
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "FuncionarioLoginDAO "+erro);
            return null;
        }
    }
    public void cadastroFuncionario(FuncionarioLoginDTO objfuncionariodto){
        String sql = "insert into loginfuncionario (Nome, Senha) VALUES (?,?)";
        aon = new ConexaoDAO().conactaBD();
        try {
            pstm = aon.prepareStatement(sql);
            pstm.setString(1, objfuncionariodto.getNome());
            pstm.setString(2, objfuncionariodto.getSenha());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "FuncionarioLoginDAO Cadastro"+erro);
        }
    }
    public ArrayList<FuncionarioLoginDTO> PesquisaFuncionario(){
        String sql = "select * from loginfuncionario";
        aon = new ConexaoDAO().conactaBD();
        try {
            pstm = aon.prepareStatement(sql);
            sr = pstm.executeQuery();
            while(sr.next()){
                FuncionarioLoginDTO objfuncionariodto = new FuncionarioLoginDTO();
                objfuncionariodto.setId(sr.getInt("Id"));
                objfuncionariodto.setNome(sr.getString("Nome"));
                objfuncionariodto.setSenha(sr.getString("Senha"));
                Lista.add(objfuncionariodto);
            }
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "FuncionarioLoginDAO Pesquisa"+erro);
        }
        return Lista;
    }
    public void AlterarFuncionario(FuncionarioLoginDTO objfuncionariodto){
        String sql = "update loginfuncionario set Nome = ?, Senha = ? where Id=?";
        aon = new ConexaoDAO().conactaBD();
        try {
            pstm = aon.prepareStatement(sql);
            pstm.setString(1, objfuncionariodto.getNome());
            pstm.setString(2, objfuncionariodto.getSenha());
            pstm.setInt(3, objfuncionariodto.getId());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "FuncionarioLoginDAO Alterar"+erro);
        }
    }
    public void ExcluirFuncionario(FuncionarioLoginDTO objfuncionariodto){
        String sql = "delete from loginfuncionario where Id = ?";
        aon = new ConexaoDAO().conactaBD();
        try {
            pstm = aon.prepareStatement(sql);
            pstm.setInt(1, objfuncionariodto.getId());
            pstm.execute();
            pstm.close();
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "FuncionarioLoginDAO Excluir"+erro);
        }
    }
}
