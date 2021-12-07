/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula14;

/**
 *
 * @author Lucas
 */
public class Video implements AcoesVideo{
    private String titulo;
    private Float avaliacao;
    private int curtidas;
    private boolean reproduzindo;
    private int views;

    public Video(String titulo){
        this.titulo = titulo;
        this.avaliacao = 1.0f;
        this.curtidas = 0;
        this.views = 0;
        this.reproduzindo = false;
    }

    @Override
    public void Play() {
        if(this.getreproduzindo()){
            System.out.println("Reproduzindo o video!");
        }
    }

    @Override
    public void Pause() {
        if(this.getreproduzindo()==false){
            System.out.println("Video pausado!");
        }
    }

    @Override
    public void like() {
        this.setcurtidas(this.getcurtidas() + 1);
        System.out.println("Mais um like dado!");
    }
    public void settitulo(String t){
        this.titulo = t;
    }
    public String gettitulo(){
        return titulo;
    }
    public void setavaliacao(float a){
        this.avaliacao = a;
    }
    public float getavaliacao(){
        return avaliacao;
    }
    public void setcurtidas(int c){
        this.curtidas = c;
    }
    public int getcurtidas(){
        return curtidas;
    }
    public void setreproduzindo(boolean r){
        this.reproduzindo = r;
    }
    public boolean getreproduzindo(){
        return reproduzindo;
    }
    public void setviews(int v){
        this.views = v;
    }
    public int getviews(){
        return views;
    }

    
    public String Stauts() {
        return "Video{" + "titulo=" + titulo + ", avaliacao=" + avaliacao + ", curtidas=" + curtidas + ", reproduzindo=" + reproduzindo + ", views=" + views + '}';
    }
    
    
}
