/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula13;

/**
 *
 * @author Lucas
 */
public abstract class Animal {
    protected float peso;
    protected int idade;
    protected int membros;
    public abstract void emitirSom();
    public void setpeso(float pe){
        this.peso = pe;
    }
    public float getpeso(){
        return peso;
    }
    public void setidade(int id){
        this.idade = id;
    }
    public int getidade(){
        return idade;
    }
    public void setmembros(int men){
        this.membros = men;
    }
    public int getmembros(){
        return membros;
    }
}
