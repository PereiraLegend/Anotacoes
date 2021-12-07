/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula06;

/**
 *
 * @author Lucas
 */

public class Controle implements InterfaceEncapsulada {
    //Atributos
    private int volume;
    private boolean ligado;
    private boolean tocando;
    //Métodos Especiais
    public Controle(){//Construtor
        this.volume = 50;
        this.ligado = true;
        this.tocando = false;
    }
    private void setvolume(int v){
        this.volume = v;
    }
    private int getvolume(){
        return volume;
    }
    private void setligado(boolean l){
        this.ligado = l;
    }
    private boolean getligado(){
        return ligado;
    }
    private void settocando(boolean t){
        this.tocando = t;
    }
    private boolean gettocando(){
        return tocando;
    }
    //Métodos abstratos (encapsulamento)

    @Override//significa sobrescrever
    public void ligar() {
        this.setligado(true);
    }

    @Override
    public void desligar() {
        this.setligado(false);
    }

    @Override
    public void abrirMenu() {
        System.out.println("------MENU------");
        System.out.println("Está ligado? "+this.getligado());
        System.out.println("Está tocando? "+this.gettocando());
        System.out.print("Volume: "+this.getvolume());
        for(int i = 0; i <= this.getvolume();i += 10){
            System.out.print("|");
        }
        System.out.println("");
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando Menu...");
    }

    @Override
    public void maisVolume() {
        if(this.getligado()==true){
            this.setvolume(this.getvolume() + 5);
        }
    }

    @Override
    public void menosVolume() {
        if(this.getligado()==true){
            this.setvolume(this.getvolume() - 5);
        } else {
            System.out.println("Impossível diminuir volume");
        }
    }

    @Override
    public void ligarMudo() {
        if(this.getligado() && this.getvolume() > 0){
            this.setvolume(0);
        }
    }

    @Override
    public void desligarMudo() {
        if(this.getligado() && this.getvolume() == 0){
            this.setvolume(50);
        }
    }

    @Override
    public void play() {
        if(this.getligado() && !(this.gettocando())){
            this.settocando(true);
        } else {
            System.out.println("Não consegui reproduzir!");
        }
    }

    @Override
    public void pause() {
        if(this.getligado() && this.gettocando()){
            this.settocando(false);
        } else {
            System.out.println("Não consegui pausar!");
        }
    }
    
}
