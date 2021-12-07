/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/*
O exercicio é o seguinte, devem ser criadas duas classes, uma chamada “Veiculos” e outra “VeiculosTestDrive”…

Na Classe “Veiculos” devem conter a "Cor, Marca, Modelo, Numero de passageiro (npass), Quantidade de Litros (qtlitros).

Nesta classe deve ser aplicado os “Metodos”(não sei se chama-se de metodo) “Get e Set”, deve haver um construtor,
um inicializador, todos os atributos, Mostrar a quantidade de litros, e quanto ele abastece.
Na Classe “VeiculosTestDrive” deve conter 2 tipos de veiculos,
o 1° é Branco, da Marca Volks, do Tipo Fox, com 5 passageiros e “zero” de combustivel.

o 2° é Azul da Marca GM, Tipo Spin, tem 7 passageiros e “zero” de combustivel.

o Veiculo Numero 1, deve abastecer 30 litros e mostra-los.

o Veiculo Numero 2, deve abastecer 40 litros e mostra-los.
*/
package com.mycompany.pooexerciciodainternet;

/**
 *
 * @author Lucas
 */
public class Veiculo {
    //atributos
    public String cor;
    public String marca;
    public String modelo;
    private boolean concerto;
    protected int npassageiros;
    private int litros;
    //construtor
    public Veiculo(){
        this.concerto = false;
    }
    public void StatusG(){
        System.out.println("Veiculo:");
        System.out.println("Cor: "+ this.getcor());
        System.out.println("Marca: "+ this.getmarca());
        System.out.println("Modelo: "+ this.getmodelo());
        System.out.println("Concerto: "+ this.getconcerto());
        System.out.println("Numero de passageiros: "+ this.getnpassageiros());
        System.out.println("litros: "+ this.getlitros());
        
    }
    //métodos
    public void Cor(){
        if(this.getcor()=="vermelho"){
            System.out.println("Na moda!");
        } else if (this.getcor()=="branco"){
            System.out.println("Não está na moda");
        } else {
            System.out.println("É uma cor comun!");
        }
    }
    public void Luxo(){
        if(this.getmarca()=="Audi"){
            System.out.println("De Luxo!");
        } else {
            System.out.println("Comun!");
        }
    }
    public void Viagens(){
        int x;//media
        if(this.getconcerto()==false){
            if(this.getlitros()<= 30){
                System.out.println("Será adicionado mais 40 de combustivél");
                this.setlitros(this.getlitros() + 40);
                System.out.println("Total preenchido de gasolina "+ this.getlitros());//dar uma olhada nisso depois
            } else if(this.getlitros()>30){
                System.out.println("Pode rodar");
            }
        } else {
            System.out.println("O veiculo está indisponível!");
        }
    }
    public void Concerto(){
        if(this.getconcerto()==true){
            System.out.println("Está no mecânico");
        } else if(this.getconcerto()==false){
            System.out.println("Está disponivél");
        }
    }
    //métodos especiais
    public void setcor(String c){
        this.cor = c;
    }
    public String getcor(){
        return cor;
    }
    public void setmarca(String m){
        this.marca = m;
    }
    public String getmarca(){
        return marca;
    }
    public void setmodelo(String mo){
        this.modelo = mo;
    }
    public String getmodelo(){
        return modelo;
    }
    public void setconcerto(boolean b){
        this.concerto = b;
    }
    public boolean getconcerto(){
        return concerto;
    }
    public void setnpassageiros(int p){
        this.npassageiros = p;
    }
    public int getnpassageiros(){
        return npassageiros;
    }
    public void setlitros(int l){
        this.litros = l;
    }
    public int getlitros(){
        return litros;
    }  

}
