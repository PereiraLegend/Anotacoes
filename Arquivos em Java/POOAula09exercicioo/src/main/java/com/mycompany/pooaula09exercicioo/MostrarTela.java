/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula09exercicioo;

/**
 *
 * @author Lucas
 */
public class MostrarTela {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Pessoa p[] = new Pessoa[2];
        Livro c[] = new Livro[5];
        p[0] = new Pessoa("lucas",19,false);
        c[0] = new Livro("A casa","Robert",200,50,true,p[0]);
        c[0].Status();
        //c[0].avancarPag();
        //c[0].voltarPag();
        //c[0].Folhear();
        //c[0].Fechar();
        p[0].fazerAniver();
    }
}
