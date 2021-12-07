/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula14;

/**
 *
 * @author Lucas
 */
public /*abstract*/ class Pessoa {
    protected String nome;
    protected int idade;
    protected String sexo;
    protected float experiencia;
    
    public Pessoa(String no, int id, String se, float ex){
        this.nome = no;
        this.idade = id;
        this.sexo = se;
        this.experiencia = 0f;
    }
    
    protected void ganharExperiencia(){
        System.out.println("Ganhou experiencia!");
    }
    
    public void setnome(String n){
        this.nome = n;
    }
    public String getnome(){
        return nome;
    }
    public void setidade(int i){
        this.idade = i;
    }
    public int getidade(){
        return idade;
    }
    public void setsexo(String s){
        this.sexo = s;
    }
    public String getsexo(){
        return sexo;
    }
    public void setexperiencia(float ex){
        this.experiencia = ex;
    }
    public float getexperiencia(){
        return experiencia;
    }

    
    public String Status() {
        return "Pessoa{" + "nome=" + nome + ", idade=" + idade + ", sexo=" + sexo + ", experiencia=" + experiencia + '}';
    }
    
    
}
