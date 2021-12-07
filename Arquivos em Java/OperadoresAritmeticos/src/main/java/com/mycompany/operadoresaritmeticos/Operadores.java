/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.operadoresaritmeticos;

/**
 *
 * @author Lucas
 */
public class Operadores {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        /*
        int n1 = 3;
        int n2 = 5;
        float m = (n1 + n2)/2;
        System.out.println("A média é igual a " +m );
        */
        /*
        int numero = 5;
        numero++;
        System.out.println(numero);
        */
        //Obs.: o resultado dessse codigo de baixo sera 10 e não será contabilizado
        //o ++ por conta de ele vir querer incrementar depois da soma, mas se ele
        //vier antes como 5 + ++numero o valor sera 11 pois ele incrementou mais um numero
        //antes da soma ser feita, o mesmo equivale para --;
        /*
        int numero = 5;
        int valor = 5 + numero++;
        System.out.println(valor);
        */
        //se eu colocar um system.out.println(numero), o valor do numero vai estar como 6
        /*System.out.println(numero);*/
        /*
        int x = 4;
        x += 2; // x = x+2
        System.out.println(x);
        */
        /*
        float v = 8.3f;
        int ar = (int) Math.ceil(v);//arredondamentos
        System.out.println(ar);
        */
        double ale = Math.random();//numero randomico ou aleatorio para zero e um so for so essa linha
        int n = (int) (5 + ale * (10 - 5));// de 5 até 10
        System.out.println(n);
    }
}
