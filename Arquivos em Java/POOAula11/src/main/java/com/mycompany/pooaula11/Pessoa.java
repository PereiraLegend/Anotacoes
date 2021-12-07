/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula11;

/**
 *
 * @author Lucas
 */
public  class Pessoa {//se ela é abstrata ela não pode ter filhos
    private String nome;
    private int idade;
    private String Sexo;
    public final void  fazerAniv(){
        this.idade++;
    }
    public void setnome(String no){
        this.nome = no;
    }
    public String getnome(){
        return nome;
    }
    public void setidade(int id){
        this.idade = id;
    }
    public int getidade(){
        return idade;
    }
    public void setSexo(String se){
        this.Sexo = se;
    }
    public String getSexo(){
        return Sexo;
    }

    @Override
    public String toString() {
        return "Dados{\n" + "nome=" + nome + "\n idade=" + idade + "\n Sexo=" + Sexo + '}';
    }
    
}
