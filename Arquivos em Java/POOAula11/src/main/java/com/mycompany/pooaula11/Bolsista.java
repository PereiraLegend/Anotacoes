/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula11;

/**
 *
 * @author Lucas
 */
public class Bolsista extends Aluno implements BolsistaInterface{
    private float bolsa;

    @Override
    public void RenovarBolsa() {
        System.out.println("Renovando bolsa de "+this.getnome());
    }
    
    @Override//para sobre por uma função já dada
    public void pagarMensalidade(){
        System.out.println(this.getnome()+" é bolsista! Pagamento de mensalidade");
    }
    
    public void setbolsa(float bo){
        this.bolsa = bo;
    }
    public float getbolsa(){
        return bolsa;
    }
}
