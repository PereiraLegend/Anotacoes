/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.prova;

/**
 *
 * @author Lucas
 */
public class alala {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
	   String nome = "João";
	   imprimeNome("Empty");
    }

    public static void imprimeNome(String nome) {
	   if(!nome.isEmpty()){
		    System.out.println("Tudo bem " + nome + "?");
	   } else { 
		    System.out.println("O nome é " + nome + "?");
	   }
    }
}
