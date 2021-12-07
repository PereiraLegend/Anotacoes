/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula10;

/**
 *
 * @author Lucas
 */
public class Aluno extends Pessoa implements AlunoInterface {
    //Atributo
    private int matricula;
    private String curso;
    //Métodos
    /*
    public Aluno(int ma, String cur) {
        this.matricula = ma;
        this.curso = cur;
    }
    */
    @Override
    public void cancelarMtr() {
        System.out.println("Matricula será cancelada!");
    }
    public void setmatricula(int in){
        this.matricula = in;
    }
    public int getmatricula(){
        return matricula;
    }
    public void setcurso(String s){
        this.curso = s;
    }
    public String getcurso(){
        return curso;
    }

    
    
}
