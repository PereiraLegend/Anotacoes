/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula09exercicioo;

/**
 *
 * @author Lucas
 */
public class Pessoa {
    //Atributos
    private String pessoa;
    private int idade;
    private boolean sexo;
    //Métodos
    public Pessoa(String pe, int id, boolean se){//construtor
        this.pessoa = pe;
        this.idade = id;
        this.sexo = se;
    }
    public void fazerAniver(){
        this.idade = this.idade + 1;
        System.out.println("Sua idade atual é " + this.getidade());
    }
    //Métodos Especiais
    public void setpessoa(String pe){
        this.pessoa = pe;
    }
    public String getpessoa(){
        return pessoa;
    }
    public void setidade(int id){
        this.idade = id;
    }
    public int getidade(){
        return idade;
    }
    public void setsexo(boolean se){
        this.sexo = se;
    }
    public boolean getsexo(){
        return sexo;
    }
}
