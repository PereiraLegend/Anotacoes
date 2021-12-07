/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula10;

/**
 *
 * @author Lucas
 */
public class Professor extends Pessoa implements ProfessorInterface{
    //Atributos
    private String especialidade;
    private float salario;

    //Métodos
    /*
    public Professor(String e, float s){//Construtor
        this.especialidade = e;
        this.salario = s;
    }
    */
    @Override
    public void ReceberAum() {//se fosse para fazer um calculo basta definir float num nos parenteses e colocar no lugar do 50, mas não pode aqui pois foi encapsulado
        this.setsalario(this.getsalario() + 50);
        System.out.println("Voce recebeu um aumento de 50 conto");
    }
    
    public void setespecialidade(String es){
        this.especialidade = es;
    }
    public String getespecialidade(){
        return especialidade;
    }
    public void setsalario(float fl){
        this.salario = fl;
    }
    public float getsalario(){
        return salario;
    }

    
}
