/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula12;

/**
 *
 * @author Lucas
 */
public class Mamifero extends Animal {
    private String corPelo;
    @Override
    public void locomover() {
        System.out.println("Correndo");
    }

    @Override
    public void alimentar() {
        System.out.println("Mamando");
    }

    @Override
    public void emitirSom() {
        System.out.println("som de Mamífero");
    }
    public void setcorPelo(String cp){
        this.corPelo = cp;
    }
    public String getcorPelo(){
        return corPelo;
    }
}
