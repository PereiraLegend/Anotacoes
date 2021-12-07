/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula11;

/**
 *
 * @author Lucas
 */
public class MostrarTela {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        //Pessoa p1 = new Pessoa() //isso está errado pois a classe pessoa foi dada como uma classe abstrata
        /*
        Visitante v1 = new Visitante();
        v1.setnome("Lucas");
        v1.setidade(19);
        v1.setSexo("M");
        System.out.println(v1.toString());
        */
        /*
        Aluno a1 = new Aluno();
        a1.setnome("Ana");
        a1.setmatricula(111111);
        a1.setcurso("Matematica");
        a1.setidade(29);
        a1.setSexo("F");
        a1.pagarMensalidade();
        System.out.println(a1.toString());
        */
        Bolsista b1 = new Bolsista();
        b1.setmatricula(1112);
        b1.setnome("Amadeus");
        b1.setbolsa(22.3f);
        b1.setSexo("M");
        b1.pagarMensalidade();//esse pagar mensalidade foi sobreposto
        System.out.println(b1.toString());
    }
}
