package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;
/**
 *
 * @author Lucas Pereira Dos Santos(202002552051) & Alexandre Lucas Carvalho Souza(202002120991) & João Lucas de Sousa Santos (201802367462) 
 */
public class ConexaoDAO {
    public Connection conactaBD(){
        Connection con = null;
        try {
            //String url = "jdbc:mysql://localhost:3306/cadastrog?useTimezone=true&serverTimezone=UTC&user=root&password=";
            String url = "jdbc:mysql://localhost:3306/cadastrog?user=root&password=";
            con = DriverManager.getConnection(url);
        } catch (SQLException erro){
            JOptionPane.showMessageDialog(null, "ConexaoDAO" + erro.getMessage());
        }
        return con;
    }
}