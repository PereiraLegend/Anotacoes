/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.pooaula07;

/**
 *
 * @author Lucas
 */
public class Lutadores implements lutadoresInterface {
    //Atributos
    private String nome;
    private String nacionalidade;
    private int idade;
    private float altura;
    private float peso;
    private String categoria;
    private int vitorias;
    private int derrotas;
    private int empates;
    //Métodos
    public Lutadores(String n,String na, int i, float a, float p, int v, int d, int e){//Construtor
        this.nome = n;
        this.nacionalidade = na;
        this.idade = i;
        this.altura = a;
        setpeso(p);//obs foi deixado assim dado a natureza do peso de definir o setcategoria
        this.vitorias = v;
        this.derrotas = d;
        this.empates = e;
    }
    
    //métodos especiais
    public void setnome(String n){
        this.nome = n;
    }
    public String getnome(){
        return nome;
    }
    public void setnacionalidade(String na){
        this.nacionalidade = na;
    }
    public String getnacionalidade(){
        return nacionalidade;
    }
    public void setidade(int i){
        this.idade = i;
    }
    public int getidade(){
        return idade;
    }
    public void setaltura(float a){
        this.altura = a;
    }
    public float getaltura(){
        return altura;
    }
    public void setpeso(float p){
        this.peso = p;
        this.setcategoria();//obs.: sempre que eu configurar o peso eu também vou configurar a categoria
    }
    public float getpeso(){
        return peso;
    }
    public void setcategoria(){
        if(peso<52.2f){
            this.categoria = "Inválido";
            System.out.println("Categoria "+categoria);
        } else if(peso<=70.3f){
            this.categoria = "Leve";
            System.out.println("Categoria "+categoria);
        } else if(peso<=83.9f){
            this.categoria = "Médio";
            System.out.println("Categoria "+categoria);
        } else if(peso<=120.2f){
            this.categoria = "Pesado";
            System.out.println("Categoria "+categoria);
        } else {
            this.categoria = "Inválido";
            System.out.println("Categoria "+categoria);
        }
    }
    public String getcategoria(){
        return categoria;
    }
    public void setvitorias(int v){
        this.vitorias = v;
    }
    public int getvitorias(){
        return vitorias;
    }
    public void setderrotas(int d){
        this.derrotas = d;
    }
    public int getderrotas(){
        return derrotas;
    }
    public void setempates(int e){
        this.empates = e;
    }
    public int getempates(){
        return empates;
    }

    @Override
    public void Apresentar() {
        System.out.println("--------------------------------");
        System.out.println("CHEGOU A HORA! Apresentamos o lutador: "+this.getnome());
        System.out.println("Diretamente de: "+this.getnacionalidade());
        System.out.println("Com "+this.getidade()+" anos");
        System.out.println("Tendo "+this.getaltura()+" m de altura");
        System.out.println("Pesando "+this.getpeso()+"Kg");
        System.out.println("Ganhou: "+this.getvitorias()+" vezes");
        System.out.println("Perdeu: "+this.getderrotas()+" vezes");
        System.out.println("Empatou: "+this.getempates()+" vezes");
    }

    @Override
    public void Status() {
        System.out.println(this.getnome());
        System.out.println("é um peso "+this.getcategoria());
        System.out.println("Tem "+this.getvitorias()+" vitorias!");
        System.out.println("Tem "+this.getderrotas()+" derrotas!");
        System.out.println("Tem "+this.getempates()+" empates!");
    }

    @Override
    public void ganharLuta() {
        this.setvitorias(this.getvitorias()+1);
    }

    @Override
    public void perderLuta() {
        this.setderrotas(this.getderrotas()+1);
    }

    @Override
    public void empatarLuta() {
        this.setempates(getempates()+1);
    }
}
