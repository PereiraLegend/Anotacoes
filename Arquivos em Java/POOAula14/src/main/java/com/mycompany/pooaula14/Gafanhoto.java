/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula14;

/**
 *
 * @author Lucas
 */
public class Gafanhoto extends Pessoa {
    private String login;
    private int totassistido;
    
    public Gafanhoto(String nome, int idade, String sexo, float experiencia, String lo){
        super(nome, idade, sexo, experiencia); //super chama a superclasse ou seja pessoa
        this.login = lo;
        this.totassistido = 0;
    }
    
    public void ViumaisUm(){
       this.totassistido += 1;
        System.out.println("Mais um video visto!");
    }
    
    @Override
    public void ganharExperiencia(){
        System.out.println("Ganhou experiencia!");
    }
    
    public void setlogin(String l){
        this.login = l;
    }
    public String getlogin(){
        return login;
    }
    public void gettotassistido(int t){
        this.totassistido = t;
    }
    public int settotassistido(){
        return totassistido;
    }

    @Override
    public String toString() {
        return "Gafanhoto{" +super.Status()+ "login=" + this.getlogin() + ", totassistido=" + this.totassistido + '}';
    }
    
    
}
