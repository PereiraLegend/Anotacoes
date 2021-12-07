/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula02;

/**
 *
 * @author Lucas
 */
public class aula02Cursovideo {
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Caneta c1 =new Caneta();//para utilizar a classe caneta em qualquer pacote
        //Obs.: na ultima linha para instanciar um objeto foi colocado c1
        c1.modelo = "Faber Castle";
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        c1.carga = 60;
        c1.tampar();
        //c1.destampar();
        c1.status();
        c1.rabiscar();
        System.out.println("<------------------------->");
        Caneta c2 = new Caneta();//Aqui eu posso criar outra caneta usando a mesma base de objeto
        c2.modelo = "Bic";
        c2.cor = "Preta";
        c2.ponta = 1.5f;
        c2.carga = 90;
        c2.destampar();
        c2.status();
        c2.rabiscar();
    }
}
