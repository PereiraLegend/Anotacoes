/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula12;

/**
 *
 * @author Lucas
 */
public class Reptil extends Animal{
    private String corEscama;

    @Override
    public void locomover() {
        System.out.println("Rastejando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo Vegetais");
    }

    @Override
    public void emitirSom() {
        System.out.println("som de Réptil");
    }
    
    public void setcorEscama(String es){
        this.corEscama = es;
    }
    public String getcorEscama(){
        return corEscama;
    }
}
