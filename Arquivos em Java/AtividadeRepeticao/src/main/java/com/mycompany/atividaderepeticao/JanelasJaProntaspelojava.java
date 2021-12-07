/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.atividaderepeticao;
import javax.swing.JOptionPane;
/**
 *
 * @author Lucas
 */
public class JanelasJaProntaspelojava {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        /*
        //Exenplo para mostrar uma mensagem:
        JOptionPane.showMessageDialog(null,"Olá, Mundo!","Bom dia",JOptionPane.WARNING_MESSAGE);
        */
        /*
        //Para digitar algo:
        int n = Integer.parseInt(JOptionPane.showInputDialog(null, "Informe um número: "));
        //Para mostrar o que foi digitado;
        JOptionPane.showMessageDialog(null,"Você digitou o valor "+n);
        */
        //Fazendo o que está acima do modo de repetição do while, ele irá repetir ate que seja digitado o zero
        /*
        int n;
        do{
            n = Integer.parseInt(JOptionPane.showInputDialog(null, "<html>Informe um número: <br><em>(para parar digite 0)</em><html>"));
        } while(n != 0);
        */
        //Para calcular a soma dos valores
        /*
        int n, s=0;
        do{
            n = Integer.parseInt(JOptionPane.showInputDialog(null, "<html>Informe um número: <br><em>(para parar digite 0)</em><html>"));
            s += n; 
        } while(n != 0);
        JOptionPane.showMessageDialog(null, "<html>Resultado Final <br><hr>" + "<br>Somatório vale " + s + "</html>");
        */
        //Atividade
        int n, s=0;
        do{
            n = Integer.parseInt(JOptionPane.showInputDialog(null, "<html>Informe um número: <br><em>(para parar digite 0)</em><html>"));
            s += n; 
        } while(n != 0);
        int z = n % 2;
        int x = n % 2;
        JOptionPane.showMessageDialog(null, "<html>" + "Total de Valores :" + n + "Total de pares"+ z +"<br>Resultado Final : <hr>" + "<br>Somatório vale " + s + "</html>");
    }
}
