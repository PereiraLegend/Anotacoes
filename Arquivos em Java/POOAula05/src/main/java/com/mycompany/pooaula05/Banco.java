/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula05;

/**
 *
 * @author Lucas
 */
public class Banco {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Atributos c1 = new Atributos();
        c1.setnumConta(11111);
        c1.setdono("Lucas");
        c1.abrirConta("CC");
        
        Atributos c2 = new Atributos();
        c2.setnumConta(22222);
        c2.setdono("Carla");
        c2.abrirConta("CP");
        //Deposito
        c1.depositar(100);
        c2.depositar(500);
        //Saque
        c1.sacar(20);
        c2.sacar(340);
        //Mostar n atela
        c1.estadoAtual();
        c2.estadoAtual();
        
    }
}
