/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.estruturaderepeticao;

import java.util.Scanner;

/**
 *
 * @author Lucas
 */
public class Contador01 {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        //aqui foi colocado a partir do zero
        /*
        int cc = 00;
        while(cc<4){
            System.out.println("Cambalhota"+(cc+1));//se deixar só o +cc no final dessa linha ele executa a partir do zero, mas com a alteração ele vai do 1
            cc++;
        }
        */
        //Comando continue
        /*
        int cc = 00;
        while(cc<10){
            cc++;
            if(cc == 5 || cc==7 || cc==9){//com essa linha ele nã mostra o 5,o 7 e o 9
                continue;
            }
            System.out.println("Cambalhota"+cc);//se deixar só o +cc no final dessa linha ele executa a partir do zero, mas com a alteração ele vai do 1
        }
        */
        //Comando Break
        /*
        int cc = 00;
        while(cc<10){
            cc++;
            if(cc == 2 || cc==3 || cc==4){
                continue;
            }
            if(cc==7){
                break;
            }
            System.out.println("Cambalhota"+cc);
        }
        */
        //Do While
        /*
        int cc = 0;
        do{
            System.out.println(cc);
            cc++;
        }
        while(cc<4);
        */
        /*
        int n, s=0;
        String resp;
        Scanner teclado = new Scanner(System.in);
        do{
            System.out.println("Digite um número: ");
            n = teclado.nextInt();
            s += n; //s = s + n;
            System.out.println("Quer continuar? [S/N] ");
            resp = teclado.next();
        } while(resp.equals("S"));
        System.out.println("A soma de todos os valores é "+ s);
        */
        //For
        //int cc;
        //for(cc=0/*de*/;cc<=3/*até*/;cc++/*pulando de 1 em 1*/){//Obs.: o For não é um "para", é um enquanto simplificado
        //   System.out.println("Cambalhota");//Vai inprimir 4 vezes a palavra cambalhota
        //}
        /*Obs.: Esse código de cima é o mesmo que ^
        *int=cc;
        *while(cc<4){
        *    System.out.println("Cambalhota");
        *    cc++;
        *}
        *
        *
        */
        //Exenplo
        /*
        int cc;
        for(cc=1;cc<=100;cc=cc+10){
            System.out.println(cc);
        }
        */
        //Obs.: em laços aninhados o valor sempre retorna o sempre para o que está dentro da expressão, onde apos ela terminar ai
        //que será posto o valor no loço de fora, e a de dentro retorna a zero, assim voltando o valor da de dentro para zero, repe-
        //tindo tudo de novo ate alcançar a condição da de fora
    }
}

