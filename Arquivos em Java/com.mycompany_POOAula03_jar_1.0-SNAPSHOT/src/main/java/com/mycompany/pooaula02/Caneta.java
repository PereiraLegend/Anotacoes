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
    public String modelo;
    public String cor;
    private float ponta;
    protected int carga;
    private boolean tampada;
    void status(){
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);//obs.: this significa auto referencia
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("está tampada? " + this.tampada);
    }
    public void rabiscar(){
        if(this.tampada == true){
            System.out.println("ERRO! Não posso rabiscar");
        }
        else{
            System.out.println("Posso Rabiscar!");
        }
    }
    public void tampar(){
        this.tampada = true;
    }
    public void destampar(){
        this.tampada = false;
    }
}
