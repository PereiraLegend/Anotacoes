/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula10;

/**
 *
 * @author Lucas
 */
public class Funcionario extends Pessoa implements FuncionarioInterface{
    //Atributos
    private String setor;
    private boolean trabalhando;

    //Metodos
    /*
    public Funcionario(String s, boolean t){//construtor
        this.setor = s;
        this.trabalhando = t;
    }
    */
    @Override
    public void mudarTrabalho() {
        this.trabalhando = !this.trabalhando;//obs sem o get pois esta negando
    }
    
    public void setsetor(String se){
        this.setor = se;
    }
    public String getsetor(){
        return setor;
    }
    public void settrabalhado(boolean tr){
        this.trabalhando = tr;
    }
    public boolean gettrabalhando(){
        return trabalhando;
    }

    
}
