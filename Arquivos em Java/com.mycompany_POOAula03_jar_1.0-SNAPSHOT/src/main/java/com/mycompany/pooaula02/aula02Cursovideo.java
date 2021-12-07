/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula02;

/**
 *
 * @author Lucas
 */
public class aula02Cursovideo {
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Caneta c1 =new Caneta();//para utilizar a classe caneta em qualquer pacote
        //Obs.: na ultima linha para instanciar um objeto foi colocado c1
        c1.modelo = "BIC cristal";
        c1.cor = "Azul";//no metodo main eu não consigo mexer nos atributos e métodos ditos privados
        //c1.ponta = 0.5;//obs.: esse arquivo é privado logo ele normal daria erro
        c1.carga = 80;//obs.: mesmo carga sendo protegido ele executou pois pois dentro da classe aula02cursoemvideo-
        //eu tenho um método principal que está utilizando o objeto c1 que é uma caneta então ele vai deixar eu mexer-
        //num atributo protegido porque ele esta dentro de uma classe que utiliza a classe caneta;
        //c1.tampada = true;
        c1.tampar();//obs aqui vem um caso especial, onde tampada ficou private mas na linha 33 e 36 há um acesso a-
        //ela o que dá certo abri-la quando os métodos do outro código na linha 32 e 35 estiverem públicos, pois é- 
        //um método da própria classe;
        //exemplo no de cima: quando vai pagar algo no mercado o seu acesso ao caixa é privado ou seja voce não pode-
        //acessar o caixa, mas o atendente pode e entre voce e o atendente há o acesso público assim ele mexe no caixa-
        //pra te dar o troco da compra
        c1.status();
        c1.rabiscar();
    }
}
