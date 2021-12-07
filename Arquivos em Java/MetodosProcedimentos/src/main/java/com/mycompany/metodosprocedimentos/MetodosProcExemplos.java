/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.metodosprocedimentos;

/**
 *
 * @author Lucas
 */
public class MetodosProcExemplos {

    /**
     * @param args the command line arguments
     */
    /*
    static void soma(int a,int b){
        int s = a + b;
        System.out.println("A soma é "+ s);
    }
    public static void main(String args[]) {//Obs.: O próprio main é um método//Obs02.: O método main é executado primeiro
        // TODO code application logic here
        //Obs.: colocar aqui só soma(5,2); não da certo pois main é um método es-
        //tático, onde só aceita classes, e para mudar isso ou "converter" tem que
        //colocar a palavra static antes do void na linha 16, observação ele fica 
        //apenas funcional dentro da classe, ou seja ele não faz parte de um estanciamento do objeto
        System.out.println("Começou o programa!");
        soma(5,2);// aqui é chamado o procedimento soma
    }
    */
    
    static int soma(int a,int b){
        int s = a + b;
        return s;//Para ele retornar o valor é preciso colocar int no lugar do viod como foi feito
    }
    public static void main(String args[]) {
        System.out.println("Começou o programa!");
        int sm = soma(5,2);// Essa é a chamada nesse caso
        System.out.println("A soma vale "+ sm);//obs quem ficou responsável pela exibição foi o método principal e não o calculo que fiou responsável apenas por fazer o cálculo
    }
    
}
