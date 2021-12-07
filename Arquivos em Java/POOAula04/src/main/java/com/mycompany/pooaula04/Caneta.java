/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula04;

/**
 *
 * @author Lucas
 */
public class Caneta {
    public String modelo;
    private float ponta;
    private String cor;
    boolean tampada;
    //construtor
    /*
    //Construtor Simples
    public  Caneta(){//Obs.: para indentificar um método construtor é aquele que tem o mesmo nome da classe no caso Caneta
        this.tampar();
        this.cor = "Azul";
    }
    */
     public  Caneta(String m, String c, float p){//Obs.: para indentificar um método construtor é aquele que tem o mesmo nome da classe no caso Caneta
        this.modelo = m;
        this.cor = c;
        this.setPonta(p);
        this.tampar();
    }

    Caneta() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    public String getModelo(){
        return this.modelo;
    }
    public void setModelo(String m){
        this.modelo = m;
    }
    public float getPonta(){
        return this.ponta;
    }
    public void setPonta(float p){
        this.ponta = p;
    }
    public void tampar(){
        this.tampada = true;
    }
    public void destampar(){
        this.tampada = false;
    }
    public void status(){
        System.out.println("SOBRE A CANETA:");
        System.out.println("Modelo: "+ this.modelo);//posso colocar tambvem como this.getModelo()
        System.out.println("Ponta: "+ this.ponta);//posso colocar também como this.getPonta()
        System.out.println("Cor: "+ this.cor);
        System.out.println("Tampada: "+ this.tampada);
    }
}
