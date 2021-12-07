/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula06;

/**
 *
 * @author Lucas
 */
public class ControleRemoto {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Controle c1 = new Controle();
        //c1.ligar();
        c1.maisVolume();//aumenta o volume
        //c1.ligarMudo();//fica mudo volume = 0
        c1.desligar();
        c1.play();//está tocando? true
        c1.abrirMenu();
        c1.fecharMenu();
    }
}
