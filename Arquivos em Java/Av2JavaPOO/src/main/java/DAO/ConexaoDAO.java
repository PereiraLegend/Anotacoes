package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;
/**
 *
 * @author Lucas Pereira
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