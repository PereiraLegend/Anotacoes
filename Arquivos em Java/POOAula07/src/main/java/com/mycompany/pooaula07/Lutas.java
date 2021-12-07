/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula07;

/**
 *
 * @author Lucas
 */
public class Lutas {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        /*
        //posso deixar desse jeito diferente do normal
        Lutadores l = new Lutadores("Smile","Brasil",44,1.75f,81.9f,11,3,1);
        l.Apresentar();
        l.Status();
        */
        //ou fazer por vetor
        Lutadores l[] = new Lutadores[6];//dá para colocar um objeto dentro de um vetor
        l[0] = new Lutadores("Smile","Brasil",44,1.75f,81.9f,11,3,1);
        //l[0].Apresentar();
        //l[0].Status();
        l[1] = new Lutadores("Angry","Eua",35,1.65f,90.9f,9,4,2);
        l[2] = new Lutadores("Meh","Africa do Sul",36,1.80f,91.9f,8,4,0);
        //posso fazer lutadores até o número [6]
        l[0].perderLuta();//posso usar os outros métodos para modificar
        l[0].Status();
    }
}
