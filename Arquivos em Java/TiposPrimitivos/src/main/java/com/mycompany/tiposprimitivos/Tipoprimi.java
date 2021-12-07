/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.tiposprimitivos;

import java.util.Scanner;

/**
 *
 * @author Lucas
 */
public class Tipoprimi {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        //Saida De Dados
        /*String nome = "Lucas";
        float nota = 8.5f;
        System.out.println("A nota é "+nota);
        System.out.printf("A nota de %s é %.3f\n",nome, nota);
        System.out.format("A nota de %s é %.3f\n",nome, nota);*/
        //Entrada de Dados
        Scanner teclado = new Scanner(System.in);
        System.out.printf("Digite o nome do aluno: \n");
        String nome = teclado.nextLine();
        System.out.printf("Digite a nota do aluno: \n");
        float nota = teclado.nextFloat();
        System.out.format("A nota de %s é %.3f\n",nome, nota);
    }
}
