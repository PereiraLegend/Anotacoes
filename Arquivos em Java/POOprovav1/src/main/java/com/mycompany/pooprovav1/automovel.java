/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooprovav1;

import java.util.Scanner;

/**
 *
 * @author Lucas
 */
public class automovel {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Atributocarro c1 = new Atributocarro();
        c1.placa = "AAA1A11";
        c1.modelo = "Ford";
        c1.combustivel = 3;
        c1.cor = "Vermelho";
        c1.ano = 2002;
        c1.vidroe = true;
        c1.arcondicionado = true;
        c1.luxo = false;
        c1.especificacoes();
        c1.Combustivel();
        c1.Luxo();
        System.out.println("-------------------------------------------------------------------------------------");
        Atributocarro c2 = new Atributocarro();
        c2.placa = "BBB2B22";
        c2.modelo = "Fiat";
        c2.combustivel = 1;
        c2.cor = "Azul";
        c2.ano = 2013;
        c2.vidroe = false;
        c2.arcondicionado = false;
        c2.luxo = false;
        c2.especificacoes();
        c2.Combustivel();
        c2.Luxo();
        System.out.println("-------------------------------------------------------------------------------------");
        Atributocarro c3 = new Atributocarro();
        c3.placa = "CCC3C33";
        c3.modelo = "Ferrari";
        c3.combustivel = 4;
        c3.cor = "Amarelo";
        c3.ano = 2013;
        c3.vidroe = true;
        c3.arcondicionado = true;
        c3.luxo = true;
        c3.computadorbordo = true;
        c3.especificacoes();
        c3.Combustivel();
        c3.Luxo();
    }
}
