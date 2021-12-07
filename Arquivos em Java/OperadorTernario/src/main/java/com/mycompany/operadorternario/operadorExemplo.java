/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.operadorternario;

/**
 *
 * @author Lucas
 */
public class operadorExemplo {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        /*
        int n1, n2, r, z;
        n1 = 14;
        n2 = 8;
        r = (n1>n2)?n1:n2;
        z = (n1>n2)?n1+n2:n1-n2;
        System.out.println(r);
        System.out.println("O operador de cálculo é "+z);
        */
        //Agora saindo de um assunto e indo para outro
        //Comparação String:
        //Obs.: Existem maneiras diferentes de declarar um objeto
        /*
        String nome1 = "Gustavo";
        String nome2 = "Gustavo";
        String nome3 = new String("Gustavo");//se eu tentar comparar os outros dois com o nome 3 eles darão diferente
        String res;
        res = (nome1==nome2)?"igual":"diferente";
        System.out.println(res);
        */
        /*
        String nome1 = "Gustavo";
        String nome2 = "Gustavo";
        String nome3 = new String("Gustavo");
        String res;
        res = (nome1.equals(nome3))?"igual":"diferente";// O .equals() ele verifica o que esta dentro do objeto e compara com a var, logo ele dará como igual se executado
        System.out.println(res);
        */
        int x,y,z;
        x = 4;
        y = 7;
        z = 12;
        boolean r;
        r = (x<y && y>z)?true:false;//pode ser usado &&,||,^, e ! aqui, em caso de duvida ver video aula Curso de Java 08 minuto 22
        System.out.println(r);
    }
}
