/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula14;

/**
 *
 * @author Lucas
 */
public class Visualizacao implements InterfaceVisualizacao{
    private Gafanhoto espectador;
    private Video filme;
    
    public Visualizacao(Gafanhoto espectador, Video filme){
        this.espectador = espectador;
        this.filme = filme;
        this.espectador.settotassistido(this.espectador.gettotassistido() + 1);
        this.filme.setviews(this.filme.getviews()+1);
    }
    
    @Override
    public void avaliar() {
        this.filme.setavaliacao(5);
    }
    @Override
    public void avaliar(int nota) {
        this.filme.setavaliacao(nota);
    }
    @Override
    public void avaliar(float porce) {
        int tot = 0;
        if(porce<=20){
            tot=3;
        } else if(porce<=50){
            tot=5;
        } else if(porce<=90){
            tot=8;
        } else {
            tot=10;
        }
        this.filme.setavaliacao(tot);
    }
    
    public void setespectador(Gafanhoto e){
        this.espectador = e;
    }
    public Gafanhoto getespectador(){
        return espectador;
    }
    public void setfilme(Video f){
        this.filme = f;
    }
    public Video getfilme(){
        return filme;
    }

    
    public String StatusVizualizacao() {
        return "Visualizacao{" + "espectador=" + espectador + ", filme=" + filme + '}';
    }
    
    
    
}
