/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.vetoes;

import java.util.Arrays;

/**
 *
 * @author Lucas
 */
public class vetor01 {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        /*
        int n[] = {3,2,8,7,5,4};//criar vetor
        System.out.println("Total de casas de N " + n.length);//obs.: length significa comprimento, ou seja ele vai mostrar o total de casas do vetor
        for(int c=0;c<=5;c++){
            System.out.println("Na posição " + c + " temos o valor " + n[c]);
        }
        */
        /*
        int n[] = {3,2,8,7,5,4};
        for(int c=0;c<=n.length-1;c++){//em vez de ir até 5 ele vai até length - 1, servindo para qualquer tamanho
            System.out.println("Na posição " + c + " temos o valor " + n[c]);
        }
        */
        /*
        String mes[] = {"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"};
        int dias[] = {31,28,31,30,31,30,31,31,30,31,30,31};
        for(int c=0; c<=mes.length; c++){
            System.out.println("O mês da " +mes[c]+ " tem "+dias[c]+" dias ao todo");
        }
        */
        //For It
        /*
        double num[] = {3.5,2.75,9,-4.5};
        for(double valor: num){
            System.out.println(valor+" ");
        }
        */
        //colocando em ordem o decima
        /*
        double num[] = {3.5,2.75,9,-4.5};
        Arrays.sort(num);//para colocar em ordem
        for(double valor: num){
            System.out.println(valor+" ");
        }
        */
        //fazer uma busca no vetor
        /*
        int num[] = {3,7,6,1,9,4,2};
        int p = Arrays.binarySearch(num, 1);//fazendo uma busca no vetor
        System.out.println("encontrei o valor na posição "+ p);
        */
        /*
        int num[] = {3,7,6,1,9,4,2};
        for(int v:num){
            System.out.println(v);
        }
        System.out.println("");
        int p = Arrays.binarySearch(num, 1);//fazendo uma busca no vetor numero um, que resulta na posição três
        //Na linha acima se for colocado um numero que não consta dentro dos vetores apresentados, ele dará o resultado 
        // como negativo, pois não existem indices negativos
        System.out.println("encontrei o valor na posição "+ p);
        */
        //Obs.: Se eu quiser que todos os elementos do vetor fiquem com o mesmo valor
        int v[] = new int[5];
        Arrays.fill(v, 8);//usado para preencher
        for(int valor: v){
            System.out.println(valor + "");
        }
    }
}
