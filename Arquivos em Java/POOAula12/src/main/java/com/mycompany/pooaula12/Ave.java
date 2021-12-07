/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula12;

/**
 *
 * @author Lucas
 */
public class Ave extends Animal{
    private String corPena;

    @Override
    public void locomover() {
        System.out.println("Voando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo Frutas");
    }

    @Override
    public void emitirSom() {
        System.out.println("Som da ave");
    }
    
    public void fazerNinho(){
        System.out.println("Construiu um ninho");
    }
    
    public void setcorPena(String cp){
        this.corPena = cp;
    }
    public String getcorPena(){
        return corPena;
    }
}
