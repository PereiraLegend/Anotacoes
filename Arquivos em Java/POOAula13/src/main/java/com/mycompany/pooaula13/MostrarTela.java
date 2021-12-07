/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula13;

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
        Cachorro c = new Cachorro();
        //c.reagir("Ola");//Quando eu tento brincar
        //c.reagir("toma comida");//quando eu alimento
        //c.reagir(19, 45);//O horario
        //c.reagir(21, 34);
        //c.reagir(true);//dono
        //c.reagir(false);
        //c.reagir(8, 8.5f);
        //c.reagir(17, 4.5f);
        c.emitirSom();
        
        Lobo l = new Lobo();
        l.emitirSom();
        
        Mamifero m = new Mamifero();
        m.emitirSom();
    }
}
