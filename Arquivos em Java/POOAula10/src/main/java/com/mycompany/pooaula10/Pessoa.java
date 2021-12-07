/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula10;

/**
 *
 * @author Lucas
 */
public class Pessoa {
    //atributos
    private String nome;
    private int idade;
    private String sexo;
    //método
    /*
    public Pessoa(String n, int i, String s) {
        this.nome = n;
        this.idade = i;
        this.sexo = s;
    }
    */
    public void fazerAniver(){
        this.setidade(this.getidade() + 1);
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
    public void setsexo(String se){
        this.sexo = se;
    }
    public String getsexo(){
        return sexo;
    }

    @Override//obs poderia ser um status comun com todos os valores mas decidi colocar isso por ser mais rapido--gerador de codigo automatico-> to string
    public String toString() {
        return "Pessoa{" + "/n nome=" + this.getnome() + "/n idade=" + this.getidade() + "/n sexo=" + this.getsexo() + '}';
    }
    
}
