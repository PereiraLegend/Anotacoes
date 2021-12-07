/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula02;

/**
 *
 * @author Lucas
 */
public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    void status(){
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);//obs.: this significa auto referencia
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("está tampada? " + this.tampada);
    }
    void rabiscar(){
        if(this.tampada == true){
            System.out.println("ERRO! Não posso rabiscar");
        }
        else{
            System.out.println("Posso Rabiscar!");
        }
    }
    void tampar(){
        this.tampada = true;
    }
    void destampar(){
        this.tampada = false;
    }
}
