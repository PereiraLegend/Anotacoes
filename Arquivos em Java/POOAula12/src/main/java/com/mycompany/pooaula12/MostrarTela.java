/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula12;

/**
 *
 * @author Lucas
 */
public class MostrarTela {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        //Animal an = new Animal();//Obs não daria certo pois a classe animal é abstrata
        
        Mamifero m = new Mamifero();
        Reptil r = new Reptil();
        Peixe p = new Peixe();
        Ave a = new Ave();
        System.out.println("-------------------------------");
        m.setpeso(75.5f);
        m.setidade(5);
        m.setmenbros(4);
        m.locomover(); //correndo
        m.alimentar(); //mamando
        m.emitirSom(); // Som de mamifero
        System.out.println("-------------------------------");
        p.setpeso(2.3f);
        p.setidade(5);
        p.setmenbros(0);
        p.locomover(); //nadando
        p.alimentar(); //comando substâncias
        p.emitirSom(); // Peixes não emitem sons humanamente audíveis
        p.soltarBolha();
        System.out.println("-------------------------------");
        a.setpeso(5.7f);
        a.setidade(8);
        a.setmenbros(2);
        a.locomover(); //voando
        a.alimentar(); //comendo frutas
        a.emitirSom(); //sons de aves 
        a.fazerNinho();
        
        System.out.println("-------------------------------");
        
        Cangurus ca = new Cangurus();
        Cachorros cs = new Cachorros();
        ca.setpeso(30.5f);
        ca.setidade(2);
        ca.setmenbros(4);
        ca.locomover(); //saltando
        ca.alimentar(); //mamando
        ca.emitirSom(); // Som de mamifero
        ca.usarBolsa();
        System.out.println("-------------------------------");
        cs.setpeso(40.5f);
        cs.setidade(5);
        cs.setmenbros(4);
        cs.locomover(); //saltando
        cs.alimentar(); //mamando
        cs.emitirSom(); // Som de mamifero
        cs.abanarRabo();
    }
}
