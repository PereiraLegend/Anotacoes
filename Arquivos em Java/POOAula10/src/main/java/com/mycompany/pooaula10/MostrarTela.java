/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.pooaula10;

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
        Pessoa p1 = new Pessoa();
        Aluno p2 = new Aluno();
        Professor p3 = new Professor();
        Funcionario p4 = new Funcionario();
        
        p1.setsexo("M");
        p4.setsexo("F");
        p2.setidade(18);
        
        p2.setcurso("Informatica");
        p3.setsalario(2500.75f);
        p4.setsetor("Estoque");
        
        p1.setnome("Lucas");
        p2.setnome("Pedro");
        p3.setnome("martins");
        p4.setnome("Ana");
        System.out.println(p1.toString());
        System.out.println(p2.toString());
        System.out.println(p3.toString());
        System.out.println(p4.toString());
    }
}
