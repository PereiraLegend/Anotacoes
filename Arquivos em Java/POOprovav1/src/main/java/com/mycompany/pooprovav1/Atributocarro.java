/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooprovav1;

/**
 *
 * @author Lucas
 */
public class Atributocarro {

   
    String placa;
    String modelo;
    byte combustivel;
    //gasolina = 1;
    //alcool = 2 ;
    //diesel = 3;
    //gas = 4;
    String cor;
    short ano;
    boolean luxo;
    boolean vidroe;
    boolean arcondicionado;
    boolean computadorbordo;
    
    void especificacoes(){
        System.out.println("Placa.............................................................: " + placa);
        System.out.println("Modelo............................................................: " + modelo);
        System.out.println("Tipo de Combustivél [1-gasolina] [2-alcool] [3-diesel] [4- gas]...: " + combustivel);
        System.out.println("Cor...............................................................: " + cor);
        System.out.println("Ano...............................................................: " + ano);
        System.out.println("Vidro Elétrico?...................................................: " + vidroe);
        System.out.println("Arcondicionado?...................................................: " + arcondicionado);
        System.out.println("Luxo?.............................................................: " + luxo);
    }
    void Combustivel(){
        if(combustivel==1 || combustivel!=2 || combustivel!=3 || combustivel!=4){
        if(combustivel==1){
            System.out.println("O tipo de combustivél é Gasolina custa 12.000");
        }
        if(combustivel==2){
            System.out.println("O tipo de combustivél é Alcool custa 10.500");
        }
        if(combustivel==3){
            System.out.println("O tipo de combustivél é Diesel custa 11.000");
        }
        if(combustivel==4){
            System.out.println("O tipo de combustivél é Gas custa 13.000");
        }
        }
        else{
            System.out.println("O tipo de combustivél Não Consta");
        }
    }
   void Luxo(){
       if(luxo==true){
           System.out.println("Computador de bordo?..............................................: " + computadorbordo);
           System.out.println("É de luxo");
           System.out.println("tem direção hidraulica, ar condicionado e vidros elétricos");
       }
       if(luxo==false){
           System.out.println("É de pobre, possui o motor, as rodas, os farois, é o que tem");
       }
   }
}
