/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula11;

/**
 *
 * @author Lucas
 */
public class Aluno extends Pessoa implements AlunoInterface{
    private int matricula;
    private String curso;

    @Override
    public void pagarMensalidade() {//se eu digitasse final nese metodo o segundo pagar mensalidade não poderia ocorrer, ja que esse seria o método final
        //obs o final noma classe faz com que ela não tenha "filhos" ou subclasses e no método, uando ele não pode ser sobreposto
        System.out.println("Pagando a mensalidade do aluno!"+ this.getnome());
    }
    
    public void setmatricula(int ma){
        this.matricula = ma;
    }
    public int getmatricula(){
        return matricula;
    }
    public void setcurso(String so){
        this.curso = so;
    }
    public String getcurso(){
        return curso;
    }
}
