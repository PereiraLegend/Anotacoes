/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula13;

/**
 *
 * @author Lucas
 */
public class Cachorro extends Lobo{
    //Assinatura é a quantidade e os tipos de atibuto, com métodos na mesma classe, Ou 
    //seja, métodos com o mesmo nome, com assinaturas diferentes dentro da mesma classe,
    //isso é chamado de polimorfismo de sobrecarga
    public void reagir(String ca){//Polimorfismo, assinatura diferente String,
        if(ca.equals("toma comida") || ca=="Ola"){
            System.out.println("Abanar e latir");
        } else {
            System.out.println("Rosnar");
        }
    }
    public void reagir(int hora, int min){//Assinatura int, int
        if(hora<12){
            System.out.println("Abanar");
        } else if(hora>=18){
            System.out.println("Ignorar");
        } else{
            System.out.println("Abanar e Latir");
        }
    }
    public void reagir(boolean dono){//Assinatura boolean
        if(dono==true){
            System.out.println("Abanar");
        } else{
            System.out.println("Rosnar e Latir");
        }
    }
    public void reagir(int idade, float peso){//Assinatura int, float
        if(idade<5){
            if(peso<10){
                System.out.println("Abanar");
            } else{
                System.out.println("Latir");
            }
        } else {
            if(peso<10){
                System.out.println("Rosnar");
            } else {
                System.out.println("Ignorar");
            }
        }
    }
    @Override
    public void emitirSom(){
        System.out.println("Au!Au!Au!");
    }
            
}
