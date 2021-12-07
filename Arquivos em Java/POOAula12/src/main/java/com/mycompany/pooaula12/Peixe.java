/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula12;

/**
 *
 * @author Lucas
 */
public class Peixe extends Animal implements PeixeInterface{
    private String corEscama ;
    //esses metodos vieram do animal
    @Override
    public void locomover() {
        System.out.println("Nadando");
    }

    @Override
    public void alimentar() {
        System.out.println("Comendo substâncias");
    }

    @Override
    public void emitirSom() {
        System.out.println("Peixe não emite sons humanamente audivéis");
    }
    //Esse método aqui é do peixeinterface
    @Override
    public void soltarBolha(){
        System.out.println("Soltou uma bolha");
    }
}
