/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula09exercicioo;

import java.util.Random;

/**
 *
 * @author Lucas
 */
public class Livro implements Publicacao {
    //Atributos
    private String titulo;
    private String autor;
    private int totpaginas;
    private int pagatual;
    private boolean aberto;
    private Pessoa leitor;
    //Método

    public Livro(String ti, String au, int to, int pa, boolean ab, Pessoa pi) {//construtor
        this.titulo = ti;
        this.autor = au;
        this.totpaginas  = to;
        this.pagatual = pa;
        this.aberto = ab;
        this.leitor = pi;
        
    }

    @Override
    public void Abrir() {
        this.setaberto(true);
        System.out.println("O livro está aberto!");
    }

    @Override
    public void Fechar() {
        this.setaberto(false);
        System.out.println("O livro está fechado!");
    }

    @Override
    public void Folhear() {
        Random folhear = new Random();
        int pagina = folhear.nextInt(this.gettotpaginas());
        System.out.println("Folheei até a página "+pagina);
    }

    @Override
    public void avancarPag() {
        this.setpagatual(getpagatual() + 1);
        System.out.println("A página atual é " + this.getpagatual());
    }

    @Override
    public void voltarPag() {
        this.setpagatual(getpagatual() - 1);
        System.out.println("A página atual é "+ this.getpagatual());
    }
    //Métodos Especiais
    public void settitulo(String ti){
        this.titulo = ti;
    }
    public String gettitulo(){
        return titulo;
    }
    public void setautor(String au){
        this.autor = au;
    }
    public String getautor(){
        return autor;
    }
    public void settotpaginas(int tp){
        this.totpaginas = tp;
    }
    public int gettotpaginas(){
        return totpaginas;
    }
    public void setpagatual(int pa){
        this.pagatual = pa;
    }
    public int getpagatual(){
        return pagatual;
    }
    public void setaberto(boolean ab){
        this.aberto = ab;
    }
    public boolean getaberto(){
        return aberto;
    }
    public void setleitor(Pessoa ps){
        this.leitor = ps;
    }
    public Pessoa getleitor(){
        return leitor;
    }
    //Mostrar na tela
    public void Status(){
        System.out.println("=================Status==================");
        System.out.println("Titulo do livro......: "+this.gettitulo());
        System.out.println("Autor do livro.......: "+this.getautor());
        System.out.println("Total de páginas.....: "+this.gettotpaginas());
        System.out.println("Página atual.........: "+this.getpagatual());
        System.out.println("O livro está aberto..? "+this.getaberto());
        System.out.println("Nome do leitor.......: "+this.leitor.getpessoa());
        System.out.println("Sexo do leitor.......: "+this.leitor.getsexo());
        System.out.println("Idade do leitor......: "+this.leitor.getidade());
        System.out.println("==========================================");
    }
            
}
