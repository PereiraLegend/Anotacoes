/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula14;

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
        Video v[] = new Video[5];
        v[0]= new Video("Andano de Skate");
        v[1]= new Video("Andano de Bicicleta");
        v[2]= new Video("Andano de Patins");
        System.out.println(v[0].Stauts());
        
        Gafanhoto g[] = new Gafanhoto[6];
        g[0]= new Gafanhoto("lucas", 22, "M", 3.9f, "ooooo");
        g[1]= new Gafanhoto("Creide", 52, "F", 5.7f, "eeeee");
        System.out.println(g[1].toString());
    }
}
