/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula04;

/**
 *
 * @author Lucas
 */
public class Aula {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
    /*
        //com o método construtor simples
        Caneta c1 = new Caneta();
        
        c1.setModelo("BIC");
        //c1.modelo = "BIC";//funciona mas se tiver privado ele não irá funcionar
        
        c1.setPonta(0.5f);//funciona resgatando através da lógica do cliente, atendente e caixa
        //c1.ponta = 0.5f; //isso não daria certo pois o ponta está privado
        //Quero escrever algo eu digito na linha de baixo
        System.out.println("Tenho uma caneta " + c1.getModelo() + " de " + c1.getPonta());// os metodos getters e setters vão proteger o atributo
        c1.status();
        }
    */
        //com o método construtor complexo
        Caneta c1 = new Caneta("NIC","Amarelo",0.4f);
        c1.status();
        Caneta c2 = new Caneta("KKK","Azul",0.5f);
        c2.status();
    }
}
