/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula07;

import java.util.Random;

/**
 *
 * @author Lucas
 */
public class LutaCombate implements LutaCombateInterface {
    //Atributos
    // ao invés de colocar um dado primitivo como caracter pra atimizar eu chamo o método já existente
    private Lutadores desafiado;//aqui ele mostra uma classe;
    private Lutadores desafiante;
    private int rounds;
    private boolean aprovacao;
    //Métodos
    
    public void marcarLuta(Lutadores l1, Lutadores l2) {
        if(l1.getcategoria().equals(l2.getcategoria()) && l1 != l2){//obs.: equals aqui foi usado por conta de serem classae mas equivale a ==
            this.aprovacao = true;
            this.desafiado = l1;
            this.desafiante = l2;
        } else {
            this.aprovacao = false;
            this.desafiado = null;
            this.desafiante = null;
        }
    }

    @Override
    public void lutar() {
        if(this.aprovacao == true){
            System.out.println("### DESAFIADO ###");
            this.desafiado.Apresentar();//Apresentar aqui vem do outro código 
            System.out.println("### DESAFIANTE ###");
            this.desafiante.Apresentar();
            Random aleatorio = new Random();//para gerar um número aleatorio foi necessário criar um novo objeto, no caso random
            int vencedor = aleatorio.nextInt(3);//0 1 2
            System.out.println("===========RESULTADO DA LUTA==========");
            switch (vencedor){
                case 0:
                    System.out.println("Empate!");
                    this.desafiado.empatarLuta();
                    this.desafiante.empatarLuta();
                    break;
                case 1:
                    System.out.println("Vitória do desafiante "+this.desafiado.getnome());
                    this.desafiado.ganharLuta();
                    this.desafiante.perderLuta();
                    break;
                case 2:
                    System.out.println("Vitória do desafiante "+this.desafiante.getnome());
                    this.desafiado.perderLuta();
                    this.desafiante.ganharLuta();
                    break;
            }
            System.out.println("========================================");
        } else {
            System.out.println("Luta não pode acontecer");
        }
    }
    public void setdesafiado(Lutadores d){
        this.desafiado = d;
    }
    public Lutadores getdesafiado(){
        return desafiado;
    }
    public void setdesafiante(Lutadores t){
        this.desafiante = t;
    }
    public Lutadores getdesafiante(){
        return desafiante;
    }
}
