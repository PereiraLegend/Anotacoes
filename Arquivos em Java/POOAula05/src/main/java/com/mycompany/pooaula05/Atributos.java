/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula05;

/**
 *
 * @author Lucas
 */
public class Atributos {
    //Atributos
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;
    int deposito;
    public Atributos(){
        this.saldo = 0;
        this.status = false;
    }
    //Métodos Personalizados
    public void estadoAtual(){
        System.out.println("-----------------------------------");
        System.out.println("Conta: "+ this.getnumConta());
        System.out.println("Tipo: "+ this.gettipo());
        System.out.println("Dono: "+ this.getdono());
        System.out.println("Saldo: "+ this.getsaldo());
        System.out.println("Status: "+ this.getstatus());
    }
    public void abrirConta(String t){
        this.settipo(t);
        this.setstatus(true);
        if(t == "CC"){
            this.setsaldo(50);
        } else if(t == "CP"){
            this.setsaldo(150);
        }
        System.out.println("Conta Aberta com sucesso!");
    }
    public void fecharConta(){
        if(this.getsaldo()>0){
            System.out.println("A conta tem dinheiro");
        } else if(this.getsaldo()<0){
            System.out.println("Conta em débito");
        } else {
            this.setstatus(false);
            System.out.println("Conta fechada com sucesso!");
        }
    }
    public void depositar(float v){
        if(this.getstatus()){
            //this.saldo = this.saldo + v;//mexe diretamente com os atributos
            this.setsaldo(this.getsaldo() + v);//mexe diretamente com os métodos especiais
            System.out.println("Depósito realizado na conta de "+ this.getdono());
        } else {
            System.out.println("Impossivél Depósitar!");
        }
    }
    public void sacar(float v){
        if(this.getstatus()){
            if(this.getsaldo() >= v){
                this.setsaldo(this.getsaldo() - v);
                System.out.println("Saque realizado na conta de"+ this.getdono());
            } else{
                System.out.println("Saldo insuficiente");
            } 
        } else{
            System.out.println("Impossível sacar de uma conta fechada");
        }
    }
    public void pagarMensal(){
       int v = 0;
       if (this.gettipo()=="CC"){
           v = 12;
       } else if (this.gettipo()=="CP"){
           v = 20;
       }
       if (this.getstatus()){
           this.setsaldo(this.getsaldo()-v);
           System.out.println("Mensalidade paga com sucesso por "+ this.getdono());
       } else {
           System.out.println("Impossível pagar com uma conta fechada");
       }
    }
    //Métodos Especiais
    public void setnumConta(int n){//Aqui é aberto a variavél 
        this.numConta = n;
    }
    public int getnumConta(){//aqui é fechado
        return numConta;
    }
    public void settipo(String t){
        this.tipo = t;
    }
    public String gettipo(){
        return tipo;
    }
    public void setdono(String d){
        this.dono = d;
    } 
    public String getdono(){
        return dono;
    }
     public void setsaldo(float s){
        this.saldo = s;
    }
    public float getsaldo(){
        return saldo;
    }
    public void setstatus(boolean s){
        this.status = s;
    }
    public boolean getstatus(){
        return status;
    }

}
